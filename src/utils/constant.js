import User from "../assets/image/User.svg";
import SideBar from "../Components/Header/sidebar";

const saleData = [
  {
    icon: <i className="fa fa-chart-line fa-3x text-primary"></i>,
    days: "Today Sale",
    rate: "$1234",
  },
  {
    icon: <i className="fa fa-chart-bar fa-3x text-primary"></i>,
    days: "Today Sale",
    rate: "$1234",
  },
  {
    icon: <i className="fa fa-chart-area fa-3x text-primary"></i>,
    days: "Today Revenue",
    rate: "$1234",
  },
  {
    icon: <i className="fa fa-chart-pie fa-3x text-primary"></i>,
    days: "Total Revenue",
    rate: "$1234",
  },
];

const recentSalesData = [
  {
    checkbox: <input className="form-check-input" type="checkbox" />,
    date: "01 Jan 2045",
    invoice: "INV-0123",
    customer: "Jane Appleseed",
    amount: "$123",
    status: "Paid",
    action: "Detail",
  },
  {
    checkbox: <input className="form-check-input" type="checkbox" />,
    date: "01 Jan 2045",
    invoice: "INV-0123",
    customer: "Jane Appleseed",
    amount: "$123",
    status: "Paid",
    action: "Detail",
  },
  {
    checkbox: <input className="form-check-input" type="checkbox" />,
    date: "01 Jan 2045",
    invoice: "INV-0123",
    customer: "Jane Appleseed",
    amount: "$123",
    status: "Paid",
    action: "Detail",
  },
  {
    checkbox: <input className="form-check-input" type="checkbox" />,
    date: "01 Jan 2045",
    invoice: "INV-0123",
    customer: "Jane Appleseed",
    amount: "$123",
    status: "Paid",
    action: "Detail",
  },
  {
    checkbox: <input className="form-check-input" type="checkbox" />,
    date: "01 Jan 2045",
    invoice: "INV-0123",
    customer: "Jane Appleseed",
    amount: "$123",
    status: "Paid",
    action: "Detail",
  },
];

const messageData = [
  {
    image: (
      <img
        className="rounded-circle flex-shrink-0 w-h-4"
        src={User}
        alt="User"
      />
    ),
    name: "Jane Appleseed",
    time: "15 minutes ago",
    message: "Lorem ipsum dolor sit amet, consectetur, incididunt ut...",
  },
  {
    image: (
      <img
        className="rounded-circle flex-shrink-0 w-h-4"
        src={User}
        alt="User"
      />
    ),
    name: "Jane Appleseed",
    time: "15 minutes ago",
    message: "Lorem ipsum dolor sit amet, consectetur, incididunt ut...",
  },
  {
    image: (
      <img
        className="rounded-circle flex-shrink-0 w-h-4"
        src={User}
        alt="User"
      />
    ),
    name: "Jane Appleseed",
    time: "15 minutes ago",
    message: "Lorem ipsum dolor sit amet, consectetur, incididunt ut...",
  },
  {
    image: (
      <img
        className="rounded-circle flex-shrink-0 w-h-4"
        src={User}
        alt="User"
      />
    ),
    name: "Jane Appleseed",
    time: "15 minutes ago",
    message: "Lorem ipsum dolor sit amet, consectetur, incididunt ut...",
  },
];

const todoList = [
  {
    checkbox: <input className="form-check-input m-0" type="checkbox" />,
    task: "Short task goes here...",
    icon: <i className="fa fa-times"></i>,
  },
  {
    checkbox: <input className="form-check-input m-0" type="checkbox" />,
    task: "Short task goes here...",
    icon: <i className="fa fa-times"></i>,
  },
  {
    checkbox: (
      <input className="form-check-input m-0" type="checkbox" defaultChecked />
    ),
    task: <del>Short task goes here...</del>,
    icon: <i className="fa fa-times"></i>,
  },
  {
    checkbox: <input className="form-check-input m-0" type="checkbox" />,
    task: "Short task goes here...",
    icon: <i className="fa fa-times"></i>,
  },
  {
    checkbox: <input className="form-check-input m-0" type="checkbox" />,
    task: "Short task goes here...",
    icon: <i className="fa fa-times"></i>,
  },
];

const tableHeading = ["#", "First Name", "Last Name", "Email"];

const tableBody = [
  {
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
];
const tableData = [
  {
    tableName: "Basic Table",
    className: "table",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    tableName: "Accented Table",
    className: "table table-striped",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    tableName: "Hoverable Table",
    className: "table table-hover",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    tableName: "Color Table",
    className: "table table-dark",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    tableName: "Bordered Table",
    className: "table table-bordered",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
  {
    tableName: "Table Without Border",
    className: "table table-borderless",
    hash: "#",
    fname: "First Name",
    lname: "Last Name",
    idType: "Email",
    no: "1",
    firstname: "Jane",
    lastname: "Doe",
    email: "jhon@email.com",
  },
];

const sideBarData = [
  {
    to: "/dashboard",
    icon: <i className="fa fa-tachometer-alt me-2" />,
    title: "Dashboard",
  },
  {
    to: "",
    icon: <i className="fa fa-laptop me-2" />,
    title: "Elements",
    isDropDown: true,
    items: [
      {
        title: "Buttons",
        to: "/button",
      },
      {
        title: "Typography",
        to: "/typography",
      },
      {
        title: "Other Elements",
        to: "/element",
      },
    ],
  },
  {
    to: "/widgets",
    icon: <i className="fa fa-th me-2" />,
    title: "Widgets",
  },
  {
    to: "/forms",
    icon: <i className="fa fa-keyboard me-2" />,
    title: "Forms",
  },
  {
    to: "/tables",
    icon: <i className="fa fa-table me-2" />,
    title: "Tables",
  },
  {
    to: "/charts",
    icon: <i className="fa fa-chart-bar me-2" />,
    title: "Charts",
  },
  {
    to: "",
    icon: <i className="fa fa-file-alt me-2" />,
    title: "Pages",
    isDropDown: true,
    items: [
      {
        title: "Sign In",
        to: "/signin",
      },
      {
        title: "Sign Up",
        to: "/signup",
      },
      {
        title: "404 Error",
        to: "/404",
      },
      {
        title: "Blank Page",
        to: "/blankpage",
      },
    ],
  },
];

export {
  saleData,
  recentSalesData,
  messageData,
  todoList,
  tableHeading,
  tableBody,
  tableData,
  sideBarData,
};
