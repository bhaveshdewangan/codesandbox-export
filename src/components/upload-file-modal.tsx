import { Button, Modal, Form, Upload, List } from "antd";
import { PlusOutlined, FileAddTwoTone, DeleteTwoTone } from "@ant-design/icons";
import fileLogo from "../asset/files-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadFileModal = ({
  visible,
  setVisible,
  setDetailsModalVisible
}: any) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [files, setFiles] = useState<any>([]);

  const resetUpload = () => {
    setFiles([]);
    form.resetFields();
  };

  const onFileUpload = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values", values);
        setVisible(false);
        resetUpload();
        setDetailsModalVisible(true);
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
      // bodyStyle={{
      //   width: "100%"
      // }}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ color: "red" }}>Upload New File</h1>
        <div
          style={{
            height: "300px",
            width: "90%",
            border: "1px dotted red",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            style={{ width: "300px", height: "180px", marginBottom: "20px" }}
            src={fileLogo}
          />
          <div
            style={{
              display: "flex",
              margin: "0"
            }}
          >
            {/* <p style={{ fontSize: "14px" }}>Drag & Drop or</p> */}

            <Form form={form} name={"file_upload"}>
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
                    message: "Please upload the file"
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
            </Form>
          </div>
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
        </div>
        <div>
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
            Upload
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default UploadFileModal;
