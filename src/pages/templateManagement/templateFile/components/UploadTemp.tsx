import { FileFilled } from '@ant-design/icons';
import { ModalForm, ProFormInstance, ProFormUploadButton } from '@ant-design/pro-components';
import { Button, message, UploadProps } from 'antd';
import { useRef } from 'react';

interface IRoleModal {
  record?: { id: string | number };
  width?: string;
}

const AttachmentList: React.FC<IRoleModal> = (props) => {
  let { record } = props;
  const formRef = useRef<ProFormInstance>();

  // // 附件下载
  // const downloadAttachment = async (row: any) => {
  //   try {
  //     const result = await attachmentDownload({
  //       fileName: row.filePath,
  //       isUpload: true,
  //     });
  //     console.log(result);
  //     if ('download' in document.createElement('a')) {
  //       const blob = new Blob([result]);
  //       const link = document.createElement('a');
  //       link.href = window.URL.createObjectURL(blob);
  //       link.download = row.fileName;
  //       link.style.display = 'none';
  //       document.body.appendChild(link);
  //       link.click();
  //       URL.revokeObjectURL(link.href); // 释放URL 对象
  //       document.body.removeChild(link);
  //     }
  //   } catch (error) {}
  // };
  let Token = '';
  // 上传附件的props
  const uploadProps: UploadProps = {
    name: 'file',
    action: '/api/system/cmsAttachment/upload',
    headers: { authorization: `Bearer ${Token}` },
    data: { contentId: record?.id },
    showUploadList: false,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败 请重试`);
      }
    },
    beforeUpload: (file) => {
      // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      // if (!isJpgOrPng) message.error('请上传 JPG/PNG 格式!');

      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) message.error('上传的附件不能大于 5MB!');

      return isLt5M;
    },
  };

  return (
    <ModalForm
      title="上传模板文件"
      trigger={
        <Button type="primary">
          <FileFilled />
          上传模板文件
        </Button>
      }
      submitTimeout={5000}
      autoFocusFirstInput={false}
      submitter={false}
      formRef={formRef}
      modalProps={{
        width: '770px',
        maskClosable: false,
        destroyOnClose: true, // 关闭后销毁子元素
      }}
    >
      <ProFormUploadButton
        extra={
          <div>
            注意: <br />
            1.单个文件大小不能超过5M; 2.只允许上传XML文件;
            <br />
            3.文件将以原文件名上传至采集服务器系统模板位置;
            <br />
            4.如果此文件的文件名在采集服务器系统模板目录中有则内容将会被覆盖;
            <br />
            5.出于性能考虑,如果文件较多或者文件较大建议直接通过网络复制文件到采集服务器，而放弃使用在线上传工具;
          </div>
        }
        name="file"
        title="上传模板文件"
        fieldProps={{ ...uploadProps }}
      />
    </ModalForm>
  );
};

export default AttachmentList;
