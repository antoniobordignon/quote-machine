import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { NewQuote } from './NewQuote';

export function Grid(){
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger 
                    type="button"       
                    className="border text-blue-300 border-blue-400 font-bold rounded-xl px-6 py-4"
                    >
                    New Quote
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                    <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Close className="absolute right-6 top-6 text-blue-400 border border-blue-400 rounded-xl">
                            <X className="" size={24} aria-label="Close"/>
                        </Dialog.Close>
                        <NewQuote />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}