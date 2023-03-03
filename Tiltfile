# Welcome to Tilt!
#   To get you started as quickly as possible, we have created a
#   starter Tiltfile for you.
#
#   Uncomment, modify, and delete any commands as needed for your
#   project's configuration.


# Output diagnostic messages
#   You can print log messages, warnings, and fatal errors, which will
#   appear in the (Tiltfile) resource in the web UI. Tiltfiles support
#   multiline strings and common string operations such as formatting.
#
#   More info: https://docs.tilt.dev/api.html#api.warn
print("""
-----------------------------------------------------------------
✨ Hello Tilt! This appears in the (Tiltfile) pane whenever Tilt
   evaluates this file.
-----------------------------------------------------------------
""".strip())
warn('ℹ️ Open {tiltfile_path} in your favorite editor to get started.'.format(
    tiltfile_path=config.main_path))


# Build Docker image
#   Tilt will automatically associate image builds with the resource(s)
#   that reference them (e.g. via Kubernetes or Docker Compose YAML).
#
#   More info: https://docs.tilt.dev/api.html#api.docker_build
#
# docker_build('registry.example.com/my-image',
#              context='.',
#              # (Optional) Use a custom Dockerfile path
#              dockerfile='./deploy/app.dockerfile',
#              # (Optional) Filter the paths used in the build
#              only=['./app'],
#              # (Recommended) Updating a running container in-place
#              # https://docs.tilt.dev/live_update_reference.html
#              live_update=[
#                 # Sync files from host to container
#                 sync('./app', '/src/'),
#                 # Execute commands inside the container when certain
#                 # paths change
#                 run('/src/codegen.sh', trigger=['./app/api'])
#              ]
# )


# Apply Kubernetes manifests
#   Tilt will build & push any necessary images, re-deploying your
#   resources as they change.
#
#   More info: https://docs.tilt.dev/api.html#api.k8s_yaml
#
# k8s_yaml(['k8s/deployment.yaml', 'k8s/service.yaml'])


# Customize a Kubernetes resource
#   By default, Kubernetes resource names are automatically assigned
#   based on objects in the YAML manifests, e.g. Deployment name.
#
#   Tilt strives for sane defaults, so calling k8s_resource is
#   optional, and you only need to pass the arguments you want to
#   override.
#
#   More info: https://docs.tilt.dev/api.html#api.k8s_resource
#
# k8s_resource('my-deployment',
#              # map one or more local ports to ports on your Pod
#              port_forwards=['5000:8080'],
#              # change whether the resource is started by default
#              auto_init=False,
#              # control whether the resource automatically updates
#              trigger_mode=TRIGGER_MODE_MANUAL
# )


# Run local commands
#   Local commands can be helpful for one-time tasks like installing
#   project prerequisites. They can also manage long-lived processes
#   for non-containerized services or dependencies.
#
#   More info: https://docs.tilt.dev/local_resource.html
#
# local_resource('install-helm',
#                cmd='which helm > /dev/null || brew install helm',
#                # `cmd_bat`, when present, is used instead of `cmd` on Windows.
#                cmd_bat=[
#                    'powershell.exe',
#                    '-Noninteractive',
#                    '-Command',
#                    '& {if (!(Get-Command helm -ErrorAction SilentlyContinue)) {scoop install helm}}'
#                ]
# )


# Extensions are open-source, pre-packaged functions that extend Tilt
#
#   More info: https://github.com/tilt-dev/tilt-extensions
#
load(
    "ext://namespace", 
    "namespace_create",
    "namespace_inject"
)
# Set default platform
os.putenv("DOCKER_DEFAULT_PLATFORM", "linux/amd64")

# Import settings from tilt_config.json
if not os.path.exists("./tilt_config.json"):
    fail(
        """
        # ===================================================================== #
        # Tilt config file not found in current directory!                      #
        # Please copy a template from tilt-resources dir.                       #
        #                                                                       #
        # E.g.:                                                                 #
        #    cp tilt-resources/local/tilt_config_local.json tilt_config.json    #
        # ====================================================================  #
        """
    )

config.define_string_list("allowed_contexts")
config.define_string("default_registry")
config.define_string_list("microservices")
config.define_string("namespace")
config.define_string_list("port_forwards")
cfg = config.parse()

# Allow default K8S context as stated in the tilt_config.json file
allow_k8s_contexts(cfg.get("allowed_contexts"))

# Set default registry as stated in the tilt_config.json file
if cfg.get("default_registry") != "":
    default_registry(cfg.get("default_registry"))

# Build base image for extention
docker_build('rentals/backend', '.', live_update=[
    sync('package.json' , '/app')
])

# Build each microservice image as stated in the tilt_config.json file
for microservice in cfg.get("microservices"):
    docker_build(
        microservice, microservice, live_update= [
            sync('./src', '/app'),
            run('cd /app && yarn install', trigger=['./package.json', './yarn.lock'])
        ]
    )

# Deploy each microservice image as stated in the tilt_config.json file
for microservice in cfg.get("microservices"):
    k8s_yaml(['k8s/deployment.yaml', 'k8s/service.yaml', 'k8s/mysql_deployment.yaml', 'k8s/mysql_service.yaml', 'k8s/mysql_pv.yaml'], allow_duplicates=True)


k8s_resource("gateway:service:default:apps:1",  port_forwards=4000)
# for port_forward in cfg.get("port_forwards"):
#     mapping = port_forward.split(":")
#     if (len(mapping) != 2):
#         fail(
#             """
#             # =================================================== #
#             # Invalid port forward specified in tilt_config.json! #
#             # Should be <resource>:<port_number>.                 #
#             #                                                     #
#             # E.g.: knote:8080                                    #
#             # =================================================== #
#             """
#         )
#     service = mapping[0]
#     port = mapping[1]
#     k8s_resource(service, port_forwards=port)


