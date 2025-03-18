import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap'i dahil et

import "./styles/global.css";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ekin Sıraçe",
    jobTitle: "Yaşam Koçu ve NLP Danışmanı",
    url: "https://ekinsirace.com",
    sameAs: ["https://www.instagram.com/dusunce.kocu"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+905549083546",
      contactType: "customer service",
    },
  };
  return (
    <div>
      <Head>
        <title>Ekin Sıraçe - Yaşam Koçu | NLP | İlişki Danışmanı</title>
        <meta
          name="description"
          content="Yaşam koçluğu, NLP, ilişki ve evlilik danışmanlığı, tütün bağımlılığını bırakma desteği ve yas süreci danışmanlığı hizmetleriyle hayatınızı değiştirmek için buradayım!"
        />
        <meta
          name="keywords"
          content="yaşam koçu, NLP koçluğu, ilişki danışmanı, evlilik terapisi, tütün bağımlılığı bırakma, yas danışmanlığı, bireysel gelişim, travma iyileşme"
        />
        <meta name="author" content="Ekin Sıraçe" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ekin Sıraçe - Yaşam Koçu | NLP | İlişki Danışmanı"
        />
        <meta
          property="og:description"
          content="Kendi potansiyelinizi keşfetmek, ilişkilerinizi güçlendirmek, tütün bağımlılığından kurtulmak ve yas sürecini sağlıklı atlatmak için profesyonel destek alın."
        />
        <meta property="og:image" content="/ekinsirace.jpeg" />
        <meta property="og:url" content="https://ekinsirace.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ekinsirace.com" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <header className="header">
        <div className="container">
          <div className="d-flex align-items-center  justify-content-between">
            <nav className="nav">
              <ul>
                <li>
                  <Link href="#hakkimda">Hakkımda</Link>
                </li>
                <li>
                  <Link href="#hizmetlerim">Hizmetlerim</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="section">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-5">
                <Image
                  src="/ekinsirace.jpeg"
                  alt="Yaşam Koçu Ekin Sıraçe - Kişisel Gelişim ve NLP Danışmanı"
                  width={345}
                  height={435}
                  priority
                />
              </div>

              <div className="col-sm-12 col-md-7 flex-column align-items-start info">
                <h1>Danışman Ekin Sıraçe</h1>
                <p className="mb-0">
                  Bilgi ve randevu için: <strong>0554 908 35 46</strong>
                </p>
                <p className="mt-0">Seanslarımız online yapılmaktadır.</p>
              </div>
            </div>
          </section>

          <section className="about">
            <h2 id="hakkimda">Hakkımda</h2>
            <p>
              Hoş geldiniz, ben Ekin Sıraçe. 1988 İzmir doğumluyum. 2013 yılında
              Çanakkale 18 Mart Üniversitesi Oyunculuk Bölümünden mezun oldum.
              2022 yılında travmatik bir biçimde babamı kaybedince, yoğun,
              kederli ve sancılı bir yas sürecinde; değiştiremeyeceğim şeyleri
              kabul etmek düşüncesi ile başladı benim hikayem.
            </p>
            <p>
              ‘’Bi de böyle bakayım’’ diyerek iyileşmeye ve iyileştirmeye
              başlayınca bundan keyif ve doyum aldığımı fark ettim. Lisans
              eğitimim boyunca işim insana insanı anlatmak olduğu için,
              karakterleri çözümlemek adına okuduğum Bilişsel Davranışçı
              kitaplar ve makaleler zeminimi hazırlamıştı.
            </p>
            <p>
              Bir gün, kendi iyileşme yolculuğumda, ‘’düşüncelerini
              değiştiremezsen bir bardak suda boğulur, değiştirirsen
              okyanuslarda bile yüzersin’’ diye bir yazı okudum ve dedim ki; BEN
              YOLA ÇIKIYORUM! Sonrasında aldığım sertifika eğitimleri ile
              bildiklerimi ve öğrendiklerimi daha profesyonel bir biçimde
              ihtiyacı olanlara aktarmaya, şifa ve derman olmaya başladım.
            </p>
          </section>

          <section className="services">
            <h2 id="hizmetlerim" className="mb-4">
              Hizmetlerim
            </h2>

            <div className="boxContainer">
              <div className="box">
                <h3>Yaşam Koçluğu: Hayatınızı Değiştirme Yolculuğu</h3>
                <span>
                  Hayatınızda bir şeylerin değişmesini istiyor fakat nereden
                  başlayacağınızı bilemiyorsanız Yaşam Koçluğu danışmanlığı tam
                  size göre.Hedef belirleme,motivasyon arttırma ve kişisel
                  potansiyelinizi keşfetmeniz konusunda size destek oluyor,adım
                  adım ilerlerken elinizden tutuyorum.
                </span>
              </div>
              <div className="box">
                <h3>NLP Koçluğu: Zihninizi Dönüştürün</h3>
                <span>
                  Zihninizde sizi sınırlayan olumsuz düşünce kalıplarınızı fark
                  edip,yeni ve güçlü inançlarla değiştirmenizde destek
                  oluyorum.Sizin için sınır olan her şeyi aşmanız mümkün!NLP
                  teknikleri,bireyin stres,kaygı,korku gibi kişiyi kısıtlayan
                  inançlardan kurtulmasını sağlarken,zihni yeniden
                  programlayarak kişiye özgüven,özsaygı ve motivasyon getirir.
                </span>
              </div>
              <div className="box">
                <h3>
                  Evlilik, Aile ve İlişki Danışmanlığı: Sağlıklı Bağlar Kurun
                </h3>
                <span>
                  Sağlıklı ilişkiler kurmak,anlamak ve anlaşılmak herkesin
                  hakkı.Evliliklerinizde/duygusal ilişkilerinizde/aile bireyleri
                  içinde/ebeveyn-çocuk ilişkisinde/arkadaşlık ya da sosyal
                  ilişkilerinizde yaşanan sorunlarınızı çözmek için
                  buradayım!İletişimi güçlendirip güven inşa etmek ve bağları
                  güçlendirmek için size rehberlik etmeye hazırım.Sevgi dolu ve
                  dengeli ilişkiler mümkün.
                </span>
              </div>
            </div>

            <div className="boxContainer align-items-center justify-content-center my-4">
              <div className="box">
                <h3>Sigara bırakma danışmanı:</h3>
                <span>
                  Sigarayı bırakmak aslında sandığınızdan çok daha kolay.Her
                  defasında “bu son sigaram” diyenlerdenseniz zihninizi
                  sigarasız hayata programlayarak,bilinçli bir biçimde tütün
                  bağımlılığından kurtulmanızı sağlıyorum.Nikotin krizleri ile
                  uğraşmadan rahatça,özgür ve sağlıklı nefes alabilmeniz için
                  buradayım.
                </span>
              </div>
              <div className="box">
                <h3>Travma ve Yas Danışmanlığı:</h3>
                <span>
                  Kaybetmek,incinmek ve zor deneyimler hayatın bir parçası
                  olabilir.Ne var ki,bu yükü tek başınıza taşıma zorunda
                  değilsiniz.Travmaların etkisini azaltmak,yas süresini sağlıklı
                  bir biçimde yönetmek ve yeniden güçlenip yola çıkmanız için
                  size destek oluyorum.Karanlıklardan çıkmak için,ışığı birlikte
                  bulabiliriz. Düşüncelerimizin ve inançlarımızın bugünümüz ve
                  geleceğimiz üzerinde nasıl etki ettiğine hayret edeceksiniz…
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer mt-4">
        <p>&copy; 2025 Ekin Sıraçe. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
