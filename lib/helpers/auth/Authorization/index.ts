// import useAuth from "@/lib/global/Auth/useAuthentication";
// import { permissionLevelOption, roleEpicName, subPermissionLevelOption } from "../type";

// class Authorization {
//   private static getRoleTemplate() {
//     return useAuth.getState().company.role_template;
//   }
//   private static getUser() {
//     return useAuth.getState().user;
//   }

//   /**
//    *  check if logged in user have spesific permission by his role at one active company
//    * * Usage Example : Auth.can("WRITE", "PURCHASEORDER")
//    * * With child permission:  Auth.can("WRITE", "PURCHASEORDER", "PO_UPDATE_STATUS_TO_ON_DELIVERY")
//    * * Another Version Auth.isPermitted(role: roleEpicName, permission_level: permissionLevelOption)
//    *
//    * @param epicName
//    * @param permission_level
//    * @param subPermission
//    * @returns Boolean
//    */
//   public static isPermitted(role: roleEpicName, permission_level: permissionLevelOption, subPermission?: subPermissionLevelOption): boolean {
//     const isPermitted = !subPermission
//       ? Authorization.isHavePermission(permission_level, role)
//       : Authorization.isHavePermissionWithSub(permission_level, role, subPermission);
//     return isPermitted;
//   }

//   /**
//    *  check if logged in user have spesific permission by his role at one active company
//    * * Usage Example : Auth.can("WRITE", "PURCHASEORDER")
//    * * With child permission:  Auth.can("WRITE", "PURCHASEORDER", "PO_UPDATE_STATUS_TO_ON_DELIVERY")
//    * * Another Version Auth.isPermitted(role: roleEpicName, permission_level: permissionLevelOption)
//    *
//    * @param permission_level
//    * @param epicName
//    * @param subPermission
//    * @returns Boolean
//    */
//   public static can(permission_level: permissionLevelOption, role: roleEpicName, subPermission?: subPermissionLevelOption) {
//     const isPermitted = !subPermission
//       ? Authorization.isHavePermission(permission_level, role)
//       : Authorization.isHavePermissionWithSub(permission_level, role, subPermission);
//     return Boolean(isPermitted);
//   }
//   /**
//    * Handle Checking of user that have permission or not
//    * @param permission_level
//    * @param role
//    * @param subPermission?
//    * @returns Boolean
//    */

//   private static isHavePermission(permission_level: permissionLevelOption, role: roleEpicName) {
//     const role_template = Authorization.getRoleTemplate();
//     const user = Authorization.getUser();
//     return Boolean(
//       role_template.permission.find((permission) => permission.role === role && permission.permission_level === permission_level) ||
//         user.is_supervisor
//     );
//   }

//   /**
//    * Handle Checking of user that have permission or not, especially in subpermission context
//    * @param permission_level
//    * @param role
//    * @param subPermission?
//    * @returns Boolean
//    */
//   private static isHavePermissionWithSub(permission_level: permissionLevelOption, role: roleEpicName, subPermission: subPermissionLevelOption) {
//     const role_template = Authorization.getRoleTemplate();
//     const user = Authorization.getUser();
//     return Boolean(
//       role_template.permission.find(
//         (permission) =>
//           permission.role === role && permission.permission_level === permission_level && permission.object_groups.includes(subPermission)
//       ) || user.is_supervisor
//     );
//   }
// }

// export default Authorization;
