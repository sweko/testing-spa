/// <reference path="../qunit.js" />
/// <reference path="../knockout-3.1.0.debug.js" />
/// <reference path="../app/role.js" />
/// <reference path="../app/roleManagement.js" />

module("loading tests");


//MOCKING UTILITY
utility.getAllContexts = function (containerObservable) {
  containerObservable([
    roleManagement.context.empty,
    new roleManagement.context(1, "Employee"),
    new roleManagement.context(2, "Division")
  ]);
}

utility.getAllPermissions = function (containerObservable) {
  var accessPermissions = [
    new roleManagement.permission(1, "Access Notification Menu"),
    new roleManagement.permission(2, "Access Administration Menu")
  ];

  var infoManagementPermissions = [
    new roleManagement.permission(4, "View Personal Details"),
    new roleManagement.permission(5, "Edit Personal Details"),
    new roleManagement.permission(6, "View Contract Information")
  ];

  containerObservable([
    new roleManagement.permissionGroup(1, "Access Permissions", accessPermissions),
    new roleManagement.permissionGroup(2, "Info Management Permissions", infoManagementPermissions)
  ]);
}


  utility.getAllRoles = function(containerObservable, parent, callback) {
    containerObservable([
      new roleManagement.role(parent, 1, "Admin", 1, "System Administrator", 0),
      new roleManagement.role(parent, 3, "EmployeeEditor", 2, "Can edit single employee", 1),
      new roleManagement.role(parent, 4, "Division Manager", 3, "Can manage division", 2),
      new roleManagement.role(parent, 5, "Restricted", 4, "No Permissions", 0)
    ]);
    if (callback)
      callback();

  }


asyncTest("initialize a new roleManager", function () {
  expect(1);
  var roleManager = new roleManagement.roleManager();
  setTimeout(function() {
    equal(roleManager.allContexts().length, 3, "contexts loaded correctly");
    start();
  }, 2000);
})