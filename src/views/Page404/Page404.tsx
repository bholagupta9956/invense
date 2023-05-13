import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-100 h-auto pt-2">
          <div className="flex w-full justify-center mt-6 mb-6 ">
            <h1 className="text-6xl sm:text-5xl xl:text-4xl font-bold text-gray-900 leading-tight">
              404 - Page not found!
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;