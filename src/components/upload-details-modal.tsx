import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  List,
  Modal
} from "antd";
import { PlusOutlined, FileAddTwoTone, DeleteTwoTone } from "@ant-design/icons";
import fileLogo from "../asset/files-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    label: "3d",
    value: "3d"
  },
  {
    label: "2d",
    value: "2d"
  },
  {
    label: "Audio",
    value: "audio"
  },
  {
    label: "Animation",
    value: "animation"
  },
  {
    label: "Tool",
    value: "tool"
  }
];

const UploadDetailsModal = ({ visible, setVisible, onUpload }: any) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [columns, setColumns] = useState(2);
  const [files, setFiles] = useState<any>([]);
  const { Option } = Select;

  const resetUpload = () => {
    setFiles([]);
    form.resetFields();
  };
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const onFileUpload = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values", values);
        setVisible(false);
        resetUpload();

        //   if(isNaN(values.approvedAmt)) {
        //     form.setFields([
        //       {
        //         name: 'approvedAmt',
        //         errors: ['only number is accepted'],
        //       },
        //    ]);
        //     throw Error('not a number');
        //   }
        //   if(isNaN(values.disburedAmt)) {
        //     form.setFields([
        //       {
        //         name: 'disburedAmt',
        //         errors: ['only number is accepted'],
        //       },
        //    ]);
        //     throw Error('not a number');
        //   }
        //   let regex = new RegExp(/^[a-zA-Z0-9]+$/i);
        //   if(!regex.test(values.bankName)) {
        //     form.setFields([
        //       {
        //         name: 'bankName',
        //         errors: ['only alphanumeric is accepted'],
        //       },
        //     ]);
        //     throw Error('not an alphanumeric number');
        //   }
        // form.resetFields();
        // onSave(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  return (
    <Modal
      // title="Vertically centered modal dialog"
      centered
      open={visible}
      width={"80%"}
      // onOk={() => {
      //   setVisible(false);
      //   onUpload();
      // }}
      onCancel={() => {
        setVisible(false);
        resetUpload();
      }}
      footer={null}
    >
      <h1 style={{ color: "red" }}>Upload New File</h1>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        form={form}
      >
        <section style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                {categories.map((category) => {
                  return (
                    <Option value={category.value}>{category.label}</Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="keywords" label="Keywords">
              <Input />
            </Form.Item>
            {/* <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item> */}
            {/* <Form.Item label="Input">
            <Input />
          </Form.Item> */}
            {/* <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item> */}
            {/* <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [{ title: "Bamboo", value: "bamboo" }]
                }
              ]}
            />
          </Form.Item> */}
          </div>
          <div style={{ width: "50%" }}>
            {/* <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou"
                      }
                    ]
                  }
                ]}
              />
            </Form.Item> */}
            <Form.Item name="releaseNote" label="Release Note">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name={"uploadFile"}
              valuePropName="fileList"
              getValueFromEvent={(event) => {
                console.log("EVENT", event);
                return event?.fileList;
              }}
              rules={[
                {
                  required: true,
                  message: "Please select the file"
                }
                // {
                //   validator(_, fileList) {
                //     console.log("VALIDATOR", _, fileList);
                //   }
                // }
              ]}
            >
              <Upload
                maxCount={1}
                showUploadList={false}
                customRequest={(info) => {
                  console.log("FILE INFO", info);
                  setFiles([info.file]);
                }}
              >
                <Button
                  type="primary"
                  style={{
                    border: "1px solid red",
                    background: "red",
                    margin: "10px"
                  }}
                >
                  <PlusOutlined />
                  Browse
                </Button>
              </Upload>
            </Form.Item>
            {files && files.length > 0 && (
              <div
                style={{
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <FileAddTwoTone />
                <List.Item.Meta
                  title={files[0]?.name}
                  style={{ margin: "0 10px" }}
                />
                <DeleteTwoTone onClick={() => resetUpload()} />
              </div>
            )}
            {/* <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item> */}
            {/* <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item> */}
            {/* <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item> */}

            {/* <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
            <Form.Item label="Slider">
              <Slider />
            </Form.Item> */}
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              border: "1px solid red",
              marginRight: "20px",
              color: "red"
            }}
            onClick={() => setVisible(false)}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            style={{
              border: "1px solid red",
              background: "red",
              marginRight: "20px"
            }}
            onClick={() => onFileUpload()}
          >
            Publish
          </Button>
        </section>
      </Form>
    </Modal>
  );
};
export default UploadDetailsModal;
