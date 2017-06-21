(function(exports) {
  function Assert() {
    this.var;
  };

  Assert.prototype.isTrue = function(assertionToCheck, testName=arguments.callee.name) {
    if (!assertionToCheck) {
        throw new Error ("Assertion failed:" + assertionToCheck + " is not truthy");
      } else {
        console.log(testName + " test passed!");
      }
    }

  Assert.prototype.isFalse = function(assertionToCheck, testName=arguments.callee.name) {
      if (assertionToCheck) {
        throw new Error ("Assertion failed:" + assertionToCheck + " is not falsy");
      } else {
        console.log(testName + " test passed!");
      }
    }

    function Page() {
    };

    Page.prototype.hasContent = function(element, expectedValue, testName=arguments.callee.name) {
      if (element != expectedValue) {
        throw new Error (element + " is not on the page");
      } else {
        console.log(testName + " test passed!");
      }
    }

    Page.prototype.clickOn = function(element) {
      var clickEvent = new Event ("click");
      element.dispatchEvent(clickEvent);
    }

  exports.Assert = Assert;
  exports.Page = Page;
})(this);
