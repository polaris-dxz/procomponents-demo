import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
const HomePage: React.FC = () => {
  const [readonly, setReadonly] = useState(false);
  const onClick = () => {
    setReadonly(!readonly);
  };
  return (
    <PageContainer>
      <button type="button" onClick={onClick}>
        readonly
      </button>
      <ProCard>
        <ProForm>
          <ProFormText name="text" readonly={readonly}></ProFormText>
          <ProFormTextArea
            name="textarea"
            readonly={readonly}
          ></ProFormTextArea>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default HomePage;
