/// <reference path="../qunit.js" />
/*

module("basic assertion tests");

test("assertion ok demo", function () {
  ok(true, "true succeeds");
  ok("a truthy string value", "non-empty string succeeds");
  ok(17.2, "non-zero number succeeds");

  ok(!false, "false fails");
  ok(!0, "0 fails");
  ok(!"", "empty string fails");
});

test("assertion equal demo", function () {
  equal(0, 0, "Zero; equal succeeds");
  equal("", 0, "Empty, Zero; equal succeeds");
  equal("", "", "Empty, Empty; equal succeeds");
});

test("assertion strict equal demo", function () {
  strictEqual(0, 0, "Zero; equal succeeds");
  notStrictEqual("", 0, "Empty, Zero; equal succeeds");
  strictEqual("", "", "Empty, Empty; equal succeeds");
  strictEqual(0, 0, "Zero, Zero; equal succeeds");
});


test("assertion deep equal demo", function () {
  var obj = { foo: "bar" };
  deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
  notStrictEqual(obj, { foo: "bar" }, "They aren't strictly 'equal'");
  notEqual(obj, { foo: "bar" }, "or just regular 'equal'");
});


test("assertion throws demo", function () {
  var badfunc = function () { throw "error"; };
  var goodfunc = function (a) { if (!a) throw "thrown"; };
  throws(badfunc, "throws with just a message, not using the 'expected' argument");
  throws(function () { goodfunc(false); }, "throws with just a message, not using the 'expected' argument");
});


module("other assertion tests");

function doOperation(x, operation) {
  if (typeof (operation) !== "undefined")
    return operation(x);
  else
    return x;
}

test("expect", function () {
  expect(2);

  var square = function (x) {
    ok("true", "operation is called");
    return x * x;
  }

  equal(doOperation(1, square), 1, "square of 1 is 1");
});

test("synchronous test: one second delay!", function () {
  expect(1);
  setTimeout(function () {
    ok(true, "Resuming execution!");
  }, 1000);
});
*/

asyncTest("asynchronous test: one second later!", function () {
  expect(1);
  setTimeout(function () {
    ok(true, "Resuming execution!");
    start();
  }, 1000);
});
