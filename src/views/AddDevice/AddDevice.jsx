import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const AddDevice = () => {
  return (
    <div className="my-4 bottom-2 h-screen w-full  bg-white overflow-auto   ">
      <div class="grid grid-cols-3 pt-10 pl-4">
        <div className="text-2xl">Add Device</div>
        {/* <div class="grid grid-cols-2 gap-4"> */}
        <div className="mr-26 ">
          <div class="relative ">
           
            <input
              type="text"
              class="block mr-10 p-2 pl-10 mt-3text-sm text-gray-900 border text-center border-gray-300  w-72 bg-gray-50"
              placeholder="Search for Device"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="m-0">
            <button className="bg-primaryLogin w-72 ml-14 text-white h-10">Create</button>
          </div>
        </div>
      </div>


      {/* </div> */}

      {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
          <div>
            <div
              id="dropdownAction"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <label for="table-search" class="sr-only">
            Search
          </label>
        </div> */}
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-8  text-sm py-3">
              All Device
            </th>
            <th scope="col" class="px-6 text-sm  py-3">
              Total Location
            </th>
            <th scope="col" class="px-8 text-sm py-3">
              Status
            </th>
            <th scope="col" class="px-6 text-sm  py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-green-500 m-2" />
                Active
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika2</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-green-500 m-2" />
                Active
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Aanshika4</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full text-lg bg-red-500 m-2" />
                Inactive{" "}
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-3" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3">
                <div class="text-base font-semibold">Anshika Pathak</div>
              </div>
            </th>
            <td class="px-6 py-4 text-lg ">11</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full  bg-red-500 m-2" />
                Inactive
              </div>
            </td>
            <td class="px-6 py-4 w-4 flex">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
              >
                <FaRegEdit className="w-10 " />
              </a>
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                class="font-medium text-blue-600 text-xl dark:text-blue-500 hover:underline"
              >
                <MdDeleteOutline />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AddDevice;
