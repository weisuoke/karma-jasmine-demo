import React from "react";
import { shallow } from '../../../lib/testHelpers/enzyme'
import Modal from '../index'

describe('test', () => {
  it("should contain text", () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('div')).toHaveText('Modal Component')
  })
})