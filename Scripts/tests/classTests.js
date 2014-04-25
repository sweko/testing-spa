/// <reference path="../qunit.js" />
/// <reference path="../knockout-3.1.0.debug.js" />
/// <reference path="../app/context.js" />
/// <reference path="../app/permission.js" />

//// CONTEXTS /// 
module("context tests");

test("context constructor test", function () {
  var sampleContext = new roleManagement.context(1, "some-type");
  equal(sampleContext.id(), 1, "id is set ok");
  equal(sampleContext.type(), "some-type", "type is set ok");
});


test("context set test", function () {
  var sampleContext = new roleManagement.context(1, "some-type");

  sampleContext.id(2);
  sampleContext.type("some-other-type");

  equal(sampleContext.id(), 2, "id set is ok");
  equal(sampleContext.type(), "some-other-type", "type set is ok");
});

test("context empty test", function () {
  var sampleContext = roleManagement.context.empty;

  equal(sampleContext.id(), 0, "empty id is ok");
  equal(sampleContext.type(), "None", "empty type is ok");
});

test("context tostring test", function () {
  var sampleContext = new roleManagement.context(1, "some-type");
  var expected = "ID: 1; Type: some-type";
  equal(sampleContext.toString(), expected, "to string comparission is correct");
});


//// PERMISSIONS /// 
module("permissions tests");

test("permission constructor test", function() {
  var samplePermission = new roleManagement.permission(1, "some-name");
  equal(samplePermission.id(), 1, "id is set ok");
  equal(samplePermission.name(), "some-name", "name is set ok");
});


test("permission set test", function () {
  var samplePermission = new roleManagement.permission(1, "some-name");

  samplePermission.id(2);
  samplePermission.name("some-other-name");

  equal(samplePermission.id(), 2, "id set is ok");
  equal(samplePermission.name(), "some-other-name", "name set is ok");
});

test("permission group constructor test - no permissions", function () {
  var sampleGroup = new roleManagement.permissionGroup(1, "some-group-name", []);
  equal(sampleGroup.id(), 1, "id is set ok");
  equal(sampleGroup.name(), "some-group-name", "name is set ok");
  equal(sampleGroup.permissions().length, 0, "no permissions are set ok");
});


test("permission group constructor test - not an array", function() {
  throws(function() { new roleManagement.permissionGroup(1, "some-group-name", {}); }, "error intercepted");
});

test("permission group constructor test - with permissions", function () {
  var sampleGroup = new roleManagement.permissionGroup(1, "some-group-name", [
    new roleManagement.permission(1, "Test1"),
    new roleManagement.permission(2, "Test2")
  ]);

  equal(sampleGroup.id(), 1, "id is set ok");
  equal(sampleGroup.name(), "some-group-name", "name is set ok");
  equal(sampleGroup.permissions().length, 2, "two permissions are set ok");
});


test("permission group constructor test - with permissions", function () {
  var sampleGroup = new roleManagement.permissionGroup(1, "some-group-name", []);

  sampleGroup.id(2);
  sampleGroup.name("some-other-group-name");

  equal(sampleGroup.id(), 2, "id set is ok");
  equal(sampleGroup.name(), "some-other-group-name", "name set is ok");
});

test("permission group constructor test - permissions management", function () {
  var sampleGroup = new roleManagement.permissionGroup(1, "some-group-name", []);

  equal(sampleGroup.permissions().length, 0, "no permissions are set ok");

  sampleGroup.permissions.push(new roleManagement.permission(1, "One"));
  sampleGroup.permissions.push(new roleManagement.permission(2, "Two"));

  equal(sampleGroup.permissions().length, 2, "two permissions are added ok");
  sampleGroup.permissions.remove(function (p) { return p.id() === 1; });

  equal(sampleGroup.permissions().length, 1, "one permissions is removed ok");
});

/*
var permission = (function () {
  function permission(id, name) {
    this.id = ko.observable(id);
    this.name = ko.observable(name);
  }
  return permission;
})();
roleManagement.permission = permission;

var permissionGroup = (function () {
  function permissionGroup(id, name, permissions) {
    this.id = ko.observable(id);
    this.name = ko.observable(name);
    this.permissions = ko.observableArray(permissions);
  }
  return permissionGroup;
})();
*/