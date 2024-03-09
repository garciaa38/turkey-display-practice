import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  // useEffect(() => {
  //   console.log('Message', size);
  // }, [size]);

  const [cname, setCName] = useState('medium');
  const [messageDisplay, setMessageDisplay] = useState('(Oh my! Your bird is naked!)')
 
  useEffect(() => {
    console.log('Message', size);

    if (size === 's') setCName('small');
    if (size === 'm') setCName('medium');
    if (size === 'l') setCName('large');
    if (size === 'xl') setCName('xlarge');
  }, [size])

  useEffect(() => {
    console.log("FeatherCount", featherCount);

    if (featherCount < 2 && featherCount > 0) {
      setMessageDisplay(`Your bird has ${featherCount} feather!`)
    } else if (featherCount >= 2) {
      setMessageDisplay(`Your bird has ${featherCount} feathers!`)
    } else {
      setMessageDisplay('(Oh my! Your bird is naked!)')
    }

  }, [featherCount])

  return (
    <div className={`message ${cname}`}>
      {messageDisplay}
    </div>
  );
}

export default Message;
