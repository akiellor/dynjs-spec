/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-42.js
 * @description Object.create - value of one property in 'Properties' is null (8.10.5 step 1)
 */


function testcase() {

        try {
            Object.create({}, {
                prop: null 
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }

    }
runTestCase(testcase);
