
import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import ServerService from "../../API/ServerService";

export default function ClassTab() {
  // const [rowData, setRowData] = useState([]);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchedText] = useState("");

//   const { id } = useParams();
  let searchInput = useRef();

//   useEffect(() => {
//     if (id !== undefined) {
//       ServerService.GetCollegesList(id)
//         .then((res) => {
//           setRowData(res.data);
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     } 
//     else {
//       ServerService.GetAllColleges()
//         .then((res) => {
//           setRowData(res.data);
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     }
//   }, [id]);
const rowData = [
  {
    key: '1',
    code:"1",
    name: 'S1 Class',
  },
  {
    key: '3',
    code:"3",
    name: 'S3 Class',
  },
  {
    key: '4',
    code:"4",
    name: 'S4 Class',
  },
  {
    key: '5',
    code:"5",
    name: 'S5 Class',
  },
  {
    key: '6',
    code:"6",
    name: 'S6 Class',
  },
];



  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchedText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchedText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchedText("");
  };

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      // width: '20%',
      ...getColumnSearchProps("code"),
    },
    {
      title: "CLASS NAME ",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Link to={`/ClassDetail`}>{text}</Link>
      ),
    },
  ];

  return <Table columns={columns} dataSource={rowData} />;
};
