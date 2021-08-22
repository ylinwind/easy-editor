/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import classnames from 'classnames';
import { Upload, Button } from 'antd';
import { useSafeState } from 'ahooks';
import { isImage } from '@/utils/file';
import styles from './index.less';

const FileChooser = () => {
  const [sourceUrl, setSourceUrl] = useSafeState('');
  const [uploadLoading, setUploadLoading] = useSafeState(false);
  const [fileType, setFileType] = useSafeState('');

  function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const fileProps = {
    // action: '//jsonplaceholder.typicode.com/posts/',
    // listType: 'picture',
    loading: uploadLoading,
    showUploadList: true,
    onChange(info: any) {
      setFileType(info.file.type);
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        setUploadLoading(false);
        setSourceUrl(imageUrl);
      });
    },
  };

  return (
    <div className={classnames(styles.wrapper)}>
      <Upload {...fileProps}>
        <Button type="primary">choose file</Button>
      </Upload>
      {sourceUrl && (
        <div className={styles.source}>
          {isImage(fileType) ? (
            <img src={sourceUrl} alt="上传 img" />
          ) : (
            <video src={sourceUrl} controls></video>
          )}
        </div>
      )}
    </div>
  );
};

export default FileChooser;
