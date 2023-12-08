import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratPage = () => {
  return (
    <div className="box">
      <div className="syaratPage w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Syarat dan Ketentuan</h1>
              <p className="text-center">Berikut ini, syarat dan ketentuan yang harus dipatuhi oleh seluruh user di website kami.</p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <p className="text-center">
                Penggunaan website kami tunduk pada syarat dan ketentuan berikut. Pengguna harus memberikan informasi pribadi yang akurat, menjaga kerahasiaan kata sandi, dan bersedia melewati proses verifikasi identitas. Hak cipta dan
                konten yang diunggah oleh pengguna tetap menjadi milik mereka, namun pengguna tidak diperkenankan mengunggah konten melanggar hak cipta atau tidak pantas. Pengguna juga diharapkan menghormati privasi pengguna lain, tidak
                menggunakan informasi untuk keperluan komersial tanpa izin, dan memahami kebijakan privasi serta penggunaan cookie. Pelanggaran terhadap syarat dan ketentuan dapat mengakibatkan tindakan seperti penangguhan atau penghentian
                akun pengguna.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h4 className="fw-bold">1. Pendaftaran dan Penggunaan Akun</h4>
              <br />
              <p className="fw-bold">a. Pembuatan Akun</p>
              <p>
                Dengan mendaftar di website kami, pengguna setuju untuk menyediakan informasi pribadi yang akurat dan lengkap. Informasi ini akan digunakan untuk keperluan identifikasi dan komunikasi antara pengguna dan platform kami.
                Pengguna bertanggung jawab untuk menjaga kerahasiaan kata sandi mereka dan tidak diperkenankan memberikan akses ke akun mereka kepada pihak ketiga.
              </p>
              <p className="fw-bold">b. Penggunaan Akun</p>
              <p>
                Penggunaan akun harus mematuhi hukum yang berlaku dan norma-norma etika yang berlaku. Kami berhak untuk menangguhkan atau menghentikan akun pengguna tanpa pemberitahuan jika terdeteksi pelanggaran terhadap ketentuan atau
                jika ada aktivitas yang mencurigakan terkait dengan keamanan akun.
              </p>
              <p className="fw-bold">c. Verifikasi Identitas</p>
              <p>
                Kami dapat meminta pengguna untuk melewati proses verifikasi identitas sebagai bagian dari upaya kami untuk menjaga keamanan dan mencegah aktivitas penipuan. Pengguna setuju untuk bekerja sama sepenuhnya selama proses ini,
                termasuk memberikan informasi tambahan jika diperlukan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h4 className="fw-bold">2. Hak Cipta dan Penggunaan Konten</h4>
              <br />
              <p className="fw-bold">a. Hak Cipta Konten</p>
              <p>
                Semua konten yang disediakan oleh pengguna tetap menjadi hak milik pengguna, namun pengguna memberikan lisensi kepada kami untuk menggunakan, mendistribusikan, dan menyesuaikan konten tersebut untuk operasi dan pengembangan
                platform. Pengguna tidak diperkenankan mengunggah konten yang melanggar hak cipta pihak ketiga.
              </p>
              <p className="fw-bold">b. Konten Tidak Pantas</p>
              <p>
                Pengguna diharapkan untuk tidak mengunggah atau membagikan konten yang mengandung unsur diskriminatif, pornografi, kekerasan, atau melanggar norma-norma etika umum. Kami berhak menghapus konten yang dianggap tidak pantas dan
                memberlakukan sanksi terhadap pengguna yang melanggar ketentuan ini.
              </p>
              <p className="fw-bold">c. Penggunaan Komersial</p>
              <p>
                Penggunaan konten atau data dari website kami untuk tujuan komersial tanpa izin tertulis tidak diperbolehkan. Pengguna yang berencana untuk menggunakan informasi atau materi dari platform kami untuk keperluan bisnis
                diharapkan untuk menghubungi kami terlebih dahulu untuk mendapatkan izin.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h4 className="fw-bold">3. Keamanan dan Privasi Pengguna</h4>
              <br />
              <p className="fw-bold">a. Keamanan Informasi</p>
              <p>
                Kami berkomitmen untuk melindungi informasi pribadi pengguna. Namun, pengguna juga bertanggung jawab untuk menjaga keamanan informasi mereka sendiri. Tidak diperkenankan melakukan tindakan yang dapat merusak keamanan website
                atau mencoba mengakses informasi pengguna lain tanpa izin.
              </p>
              <p className="fw-bold">b. Kebijakan Privasi</p>
              <p>Pengguna diharapkan untuk membaca dan memahami kebijakan privasi kami. Dalam hal ada pertanyaan atau keprihatinan terkait privasi, pengguna dapat menghubungi tim dukungan kami untuk mendapatkan klarifikasi lebih lanjut.</p>
              <p className="fw-bold">c. Cookie dan Analitika</p>
              <p>
                Kami dapat menggunakan cookie dan alat analitika untuk meningkatkan pengalaman pengguna. Dengan menggunakan website kami, pengguna menyetujui penggunaan cookie dan pemrosesan data sesuai dengan kebijakan privasi yang
                berlaku. Pengguna dapat mengelola preferensi cookie mereka melalui pengaturan browser.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default SyaratPage;
