import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

function Dashboard(props) {
  const history = useHistory()

  const [customerList, setCustomerList] = useState([])

  useEffect(() => {
    getCustomer()
  }, [])

  const getCustomer = async () => {
    const res = await axios.get('http://localhost:4000/customer')
    console.log(
      '🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res',
      res.data,
    )

    if (!res.data) return alert('KO CÓ DỮ LIỆU TRẢ VỀ')

    const { customers } = res.data
    setCustomerList(customers)
  }

  const logout = () => {
    localStorage.removeItem('account')

    history.push('/')
  }

  return (
    <div>
      <div className="dashboard_header">
        <div>
          <input className="dashboard_header_search" type="text" />
          <button className="b_search">Tìm Kiếm</button>
        </div>
        <div className="dashboard_header_group">
          <div>
            <Link to="add-admin">
              <button className="dashboard_add">Add admin</button>
            </Link>
          </div>
          <div>
            <Link to="home">
              <button onClick={logout} className="dashboard_signout">
                Log out
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard_body">
        <div className="dashboard_body_datalist">
          <div className="container_menu">
            <div className="datalist_menu" id="inf_id">
              ID
            </div>
            <div className="datalist_menu" id="inf_name">
              Name
            </div>
            <div className="datalist_menu" id="inf_phone">
              Phone
            </div>
            <div className="datalist_menu" id="inf_email">
              Email
            </div>
            <div className="datalist_menu" id="inf_address">
              Address
            </div>
            <div className="datalist_menu" id="inf_city">
              City
            </div>
            <div className="datalist_menu" id="inf_function">
              Function
            </div>
          </div>
          {customerList.length > 0 &&
            customerList.map((item, key) => {
              return (
                <div className="container_inf" key={key}>
                  <div className="datalist_inf" id="inf_id">
                    {item.id}
                  </div>
                  <div className="datalist_inf" id="inf_name">
                    {item.name}
                  </div>
                  <div className="datalist_inf" id="inf_phone">
                    0763 656 338
                  </div>
                  <div className="datalist_inf" id="inf_email">
                    Anhkien1811@gmail.com
                  </div>
                  <div className="datalist_inf" id="inf_address">
                    140/25 Phạm Văn Chiêu, F9, Gò Vấp
                  </div>
                  <div className="datalist_inf" id="inf_city">
                    Hồ Chí Minh
                  </div>
                  <div className="datalist_inf" id="inf_function">
                    <div className="frame_func">
                      <img className='setting_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png'/>
                      <img className='delete_icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADHx8ckJCT4+Pg2NjapqalgYGCampqSkpIoKCh+fn7e3t7q6upVVVW8vLw/Pz+wsLDPz8+enp5sbGzW1tZCQkIfHx+2trZ2dnaEhITw8PDOzs7BwcFRUVFLS0szMzPj4+MXFxdxcXGLi4sPDw9nZ2cZGRkPUvFYAAAECklEQVR4nO2df1uyMBSGQxF/oAYihpJhFvX9v+Fr6eYm8IIydsZ67r+6TiDnDtxgjbOnJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANiGWwF1XmpYRNnhpYJDsFtR59cW98OpYRRT59iKxUud4ImEOss2HBoIOk6Pr9RJI0FnQ53nw7hNrtEf9tSZPsqqoaCzpc70UaZNDXPqTB/FvzrMvnzf33lnotPPfiAqUmf6KGsmMCxrLd2tRYYVnfqYG/b1/o0Zjit+P7fGcFrx+/TbFkOvaoPAFsOqc9h/Q/Zc8Vm1waYXbWkae5NyIibwFlVsMWOG05K9w3AVpyn52X3lPUJH5Nk0JfRzvzr2O0sO6ASbPf61Z05luK3PTQ1LIsGFLkHHWdAY7vUZhjSGkT7DCY3hznpDoSvc7QfK8XxyQ/54N+uoIXgfEhtm7PjvXR1hRWzIngy+ujtEZobhrrtDjM0wDLo7xMYMw+on3LaEhnwPHWfbTVtzvaUgNzx1GIHAaDlWQHAk7w/fCrcenWH/XVtEYxjrM6T6H6q2y3REJKjvJNIN1Hh6BCvHzDUQaxiLGhFPZIg/+cC1M3ucUSDBP3KdEA3RSLDbY4XtAR8MV/eRbVgrN3SHZhlG1ht6MLwbGOoGhvcDQ93A8H5gqBsY3g8MdfNnDSdBVhjud731tDB1JI3WOznYD8PfSW25/IR+fsHkQ979POFBGvPtheFlokYmbXkZfpRmVqSXvV+FWC8M2eiN+D8bNgEnKNvbF2J9MGRnRpqwxSbgHMW92RiI+OJMHwyfywx5UPx2snGsoRCzy3DZU8PEesMQhhwYmsDfbGlgeAWGJgDDYhCGMNQNDItBGMJQNzAsBmEIQ93AsBiEIQx1A8NiEIYw1A0Mi0EYwlA3MCwGrTVMYMiAoW5gyLHfMIQhA4a6gSHHfsPIJsO99YbzxoasuORBiPXB0P3f91CaI8zqh4jllE0zTEoM+dRfsfgoqzIhFXpk17NYvsQ0w0GZ4es5Jr9xcZneLpf3vrx7LxabNc2QVVWbSdHBT5Y3ZcDS32blppzOPD/Fcsnazc0yjMvTceN9sT7uajIpvDPjhpNELhfMZ/rPbrelYaH8D85b4qx+Wy2wKhbKysjwqjAf9dtqgdUaUrYQBy+XQlQfqgBfqUNRpZXr2iZkJZJv4BltlNQX5+2MMySvV87gKb0pOItC3aIOa07eyXXVo3zassDgXCyhbcpFKtyF/vC93PoPss5y8ZNMWkIocbqA2kqii/Lshi1WtqzP+E6IqpRXo3qZBANXKlNagO/FyFUR5+P6zBvyaUxXf0OspME5tu1Tu2W1D6dtSJ7N6eYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvwD+AdPMLe3G4oAAAAASUVORK5CYII='/>
                    </div>
                    {/* <div>2</div> */}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className="dashboard_footer">
        <div className="dashboard_footer_b_adduser">
          <Link to="add-user">
            <button>Add user</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
