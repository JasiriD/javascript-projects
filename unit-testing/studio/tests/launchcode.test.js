// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return true if the value of organization is `nonprofit`.", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  })
  
  test("should return true if the value of executiveDirector is `Jeff`.", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })

  test("should return true if percentageCoolEmployees is 100.", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })

  test("should check if the programsOffered array is the correct size and containst the correct values.", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");

    expect(launchcode.programsOffered.length).toEqual(3);
  })

  test("should check if the output of launchOutput() is divisible only by 2", function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  })

  test("should check if the output of launchOutput() is divisible only by 3", function(){
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  })

  test("should check if the output of launchOutput() is divisible only by 5", function(){
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  })

  test("should check if the output of launchOutput() is divisible by 2 and 3", function(){
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  })

  test("should check if the output of launchOutput() is divisible by 5 and 3", function(){
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  })

  test("should check if the output of launchOutput() is divisible by 2 and 5", function(){
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!)");
  })

  test("should check if the output of launchOutput() is divisible by 2, 3 and 5", function(){
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  })


});