import MDXComponents from '@theme-original/MDXComponents';
import Stub from '@site/src/components/Stub';

// 全局注册，文档里直接写 <Stub> 即可，不用逐页 import
export default {
  ...MDXComponents,
  Stub,
};
