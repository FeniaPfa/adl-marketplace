import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const addProductAlert = () => {
    Swal.fire({
        title: 'Item agregado',
        icon: 'success',
        timer: 1000,
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut',
        },
    });
};

export const removeProductAlert = () => {
    Swal.fire({
        title: 'Item eliminado',
        icon: 'warning',
        timer: 1000,
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut',
        },
    });
};

export const resetCartAlert = () => {
    Swal.fire({
        title: 'Carrito eliminado',
        icon: 'error',
        timer: 1000,
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut',
        },
    });
};
const MySwal = withReactContent(Swal);
export const notUserCart = () => {
    MySwal.fire({
        icon: 'error',
        title: 'Tienes que ingresar para poder agregar productos al carrito',
        customClass: {
            confirmButton: 'custom-button',
        },
    });
};
