describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe("A suite is just a function", () => {
  let a

  it ("and so is a spec", () => {
    a = true;

    expect(a).toBe(true)
  });
})

describe("A suite with some shared setup", () => {
  var foo = 0;

  beforeEach(function () {
    console.log('beforeEach', foo)
    foo += 1
  })

  afterEach(function () {
    console.log('afterEach', foo)
    foo = 0
  })

  beforeAll(function () {
    console.log('beforeAll', foo)
    foo = 1
  })

  afterAll(function () {
    console.log('beforeAll', foo)
    foo = 0
  })

  it("foo1", () => {
    const foo1 = foo
    expect(foo).toBe(2)
  })

  it("foo2", () => {
    const foo1 = foo
    expect(foo).toBe(1)
  })
})