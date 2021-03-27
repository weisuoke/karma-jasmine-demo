import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallow } from '../../../lib/testHelpers/enzyme'
import Button from '../index'

describe('test', () => {
  beforeEach(() => {
    jasmineEnzyme()
  })

  it("should contain text", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).toHaveText('Button')
  })

  it("button click", () => {
    const spy = jasmine.createSpy()
    const wrapper = shallow(<Button onClick={spy}/>)
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})