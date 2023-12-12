import React from 'react'
import { HeaderTitle } from '../../utils/Container'
import Add_group from '../../components/add_group/Add_group'
import "./Group.scss"
import Group_list from '../../components/group_list/Group_list'
import Panel from '../../components/panel/Panel'

const Group = () => {
  return (
    <div className='group'>
      {/* <Panel/> */}
        <HeaderTitle title="Guruhlar" /> 
        <Add_group/>
        <Group_list/>
    </div>
  )
}

export default Group
