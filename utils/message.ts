import { message } from 'antd';
import axios from 'axios';

export const showErrorMessage = (error: unknown) => {
    let msg = 'An unexpected error occurred';

    if (axios.isAxiosError(error)) {
        if (!error.response) {
            msg = 'Check your internet connection';
        } else if (error.response.data?.message) {
            msg = error.response.data.message;
        } else if (typeof error.response.data === 'string') {
            msg = error.response.data;
        } else {
            msg = `Error ${error.response.status}`;
        }
    } else if (error instanceof Error) {
        msg = error.message;
    } else if (typeof error === 'string') {
        msg = error;
    } else if (error && typeof error === 'object') {
        const anyErr = error as Partial<{ message: string; error: string }>;
        if (anyErr.message) {
            msg = anyErr.message;
        } else if (anyErr.error) {
            msg = anyErr.error;
        }
    }

    message.error(msg, 3); // duration 3s
};

