import toast from 'react-hot-toast';

export default function useNotification() {
    const success = () =>
        toast.custom(
            t => (
                <div
                    className={`bg-green-500 text-white px-6 py-4 shadow-md rounded-full ${
                        t.visible ? 'animate-enter' : 'animate-leave'
                    }`}
                >
                    Success!
                </div>
            ),
            {
                duration: 2000,
                position: 'bottom-center',
            },
        );

    const error = () =>
        toast.custom(
            t => (
                <div
                    className={`bg-red-500 text-white px-6 py-4 shadow-md rounded-full ${
                        t.visible ? 'animate-enter' : 'animate-leave'
                    }`}
                >
                    Error!
                </div>
            ),
            {
                duration: 2000,
                position: 'bottom-center',
            },
        );

    return [success, error];
}
