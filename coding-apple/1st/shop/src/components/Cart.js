import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  console.log(props.reduxState)
  const loadState = props.reduxState;
  console.log(loadState)

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th> */}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loadState.map((cart) => (
                  <tr key={cart.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{cart.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{cart.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {cart.quan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cart.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => { props.dispatch({ type: "INCREMENT" })}}>+</button>
                      <button>-</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            { props.isAlert === true ? 
            <div>
              <p>지금 구매하면 20% 할인</p>
              <button>닫기</button>
            </div> : null }
          </div>
        </div>
      </div>
    </div>
  )
};

function propsfyOfState(state) {
  console.log(state)
  return {
    reduxState: state
    // reduxState: state.reducer,
    // isAlert: state.reducer2
  }
}

export default connect(propsfyOfState)(Cart); 