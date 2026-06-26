import { useEffect, useRef } from 'react';

export default function RazorpayButton() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Ensure the script is only added once
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_T66XoZqBDanttH');
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center mt-4">
      <form ref={formRef}></form>
    </div>
  );
}
