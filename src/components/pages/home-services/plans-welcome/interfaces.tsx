export interface ChangeEventArgs {
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}