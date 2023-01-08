import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Dropdown,
  Avatar,
  Image,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setIsModalOpen(false);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
  ];
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="float-left">
        <p className="d-inline-block"> 📝 Post-it</p>
      </div>

      <div className="d-inline-block d-flex justify-content-center">
        <Select
          style={{
            width: 300,
          }}
          maxTagTextLength={1}
          dropdownMatchSelectWidth={false}
          showSearch
          placeholder="Browse Sub-Posts"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>

      <div className="d-inline-block float-right">
        <Button type="default" onClick={showModal}>
          <EditOutlined />
        </Button>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
        >
          <Button>bottomRight</Button>
        </Dropdown>
        {/* <Dropdown
          menu={{
            items
          }}
          placement="bottom"
          arrow
        >
          <Button>
            <Avatar
              size={20}
              src={
                <Image src="https://png.pngitem.com/pimgs/s/38-380663_monkey-d-luffy-png-pic-monkey-d-luffy.png" />
              }
            />
            Username
          </Button>
        </Dropdown> */}
      </div>

      <Modal
        title={<h2 className="text-center">CREATE POST</h2>}
        open={isModalOpen}
        onCancel={handleCancel}
        okText="Submit"
        footer={[
          <div>
            <Button
              form="create_postit_form"
              key="submit"
              htmlType="submit"
              type="primary"
            >
              Submit
            </Button>
          </div>,
        ]}
      >
        {/* EDIT THIS FOR FORM */}
        <Form
          id="create_postit_form"
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input a Title!",
              },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item
            name="sub_post_title"
            rules={[
              {
                required: true,
                message: "Please input a Subpost Title!!",
              },
            ]}
          >
            <Input placeholder="Sub Post Title" />
          </Form.Item>

          <Form.Item
            name="text"
            rules={[
              {
                required: true,
                message: "Please input Text!",
              },
            ]}
          >
            <Input placeholder="Text" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NavBar;
