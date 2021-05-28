import React, { useCallback, useState } from 'react';

export function useConfirmLogDialog(options) {
  const {
    message = 'Are you sure?',
    onComplete,
    onConfirm,
  } = options;

  const [dialog, setDialog] = useState(null);

  const handleClose = useCallback(() => {
    setDialog(null);
    onComplete();
  }, [setDialog, onComplete])

  const handleConfirm = useCallback(() => {
    setDialog(d => ({ ...d, type: 'modal', content: '', txtContent: '' }));
    
    onConfirm((msg) => {
      setDialog(d => {
        const txtContent = `${d.txtContent}${msg}`;
        const content = <div>{txtContent.split("\n").map((txt, i) => <p key={i}>{txt}</p>)}</div>;

        return { ...d, content, txtContent };
      });
    })
  }, [onConfirm, setDialog]);

  const onHandle = useCallback(() => {
    setDialog({
      type: 'confirm',
      message,
      onClose: handleClose,
      onCancel: handleClose,
      onConfirm: handleConfirm,
    });
  }, [setDialog, message]);

  return {
    dialog,
    onHandle,
  };
}
