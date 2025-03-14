import React from 'react'
import CheckBox from './CheckBox'

function CheckBoxContainer() {
    const arr = ["Check Merchant", "Distribution Detail", 'Business Type', "Business Owner", "Fund Withdraw", "Review"]
  return (
    <div>
        {
            arr.map((item, index) => <CheckBox item={item} checked={index === 4 ? true : false}/>)
        }
    </div>
  )
}

export default CheckBoxContainer