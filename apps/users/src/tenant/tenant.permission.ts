import { Permissions, Actions } from 'nest-casl';
import { InferSubjects } from '@casl/ability';

import { Roles } from 'apps/roles/roles';
import { TenantDto } from './Dtos/create-tenant.dto';

export type Subjects = InferSubjects<typeof TenantDto>;
export const permissions: Permissions<Roles, Subjects, Actions> = {
  everyone({ can }) {
    can(Actions.read, TenantDto);
  },
};
