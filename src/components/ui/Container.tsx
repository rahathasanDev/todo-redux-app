import  { ReactNode } from 'react';
type TContainerProps = {
  children : ReactNode;
}

const Container = ({children}: TContainerProps) => {
  return (
    <div className='h-full rounded-md w-[90%]  mx-auto max-w-7xl'>
      {children}
    </div>
  );
};

export default Container;