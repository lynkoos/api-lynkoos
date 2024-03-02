import NavBar from '../script/nav'
import Image from 'next/image';
import Version from '../script/version'
import './css/index.css'
import './css/span.css'

export default function Home() {
  return (
    <div>
      <div>
        <div className='page-index'>
          <h1>BIENVENIDO A API LYNKOOS</h1>
        </div>

        <div className='page-version'>
          <div className='page-version-cont'>
            <Image className='page-version-img' src='/Logo-Blue.svg' alt="Logo Azul" width={200} height={200} />
          </div>
          <div className='page-ver-cont'>
            <span className='page-spam-one'> Actualmente nos </span>
            <span className='page-spam-two'> encotramos en la </span>
            <Version />
          </div>
        </div>
      </div>
      <div className='page-back'>
        {/* <Image className='image' src='/Back-Left.svg' alt='Imagen No Disponible' width={1000} height={1000}></Image> */}
      </div>

      <NavBar></NavBar>
    </div>
  );
}
