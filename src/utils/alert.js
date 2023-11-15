import Swal from 'sweetalert2';

function alert(status) {
  const message = {
    icon: 'error',
    title: '데이터 작업 실패',
    html: `<h2>status: <strong>${status}</strong></h2> <br> <p>관리자에게 문의 바랍니다.</p>`,
    showCancelButton: false,
    confirmButtonText: '확인',
  };

  return Swal.fire(message);
}

export default alert;
