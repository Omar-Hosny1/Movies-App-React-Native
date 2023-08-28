import {Button, Center, AlertDialog} from 'native-base';
import React from 'react';

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
  isOpen: boolean;
  setIsOpen: any;
}

function AlertDialogComponent({
  description,
  onConfirm,
  title,
  isOpen,
  setIsOpen,
}: Props) {
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{title}</AlertDialog.Header>
          <AlertDialog.Body>{description}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  onConfirm();
                  onClose();
                }}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

export default AlertDialogComponent;
