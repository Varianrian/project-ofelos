import React from "react";
import Image from "next/image";

function Page() {
  const data = [
    {
      "id": 1,
      "image": "/images/ESP-32.png",
      "title": "Komponen utama yang digunakan dalam Larvasida Ball adalah ESP 32, yang berfungsi sebagai navigasi dan IoT.",
    },
    {
      "id": 2,
      "image": "/images/ESP-32.png",
      "title": "Kamera ESP 32 dan LED lamp hadir dalam Larvasida Ball untuk memfasilitasi analisis real-time keadaan di sekitar perangkat. Pengguna dapat mengakses tampilan ini dengan tap pada bagian “Get Started”",
    },
    {
      "id": 3,
      "image": "/images/ESP-32.png",
      "title": "Kamera ESP 32 juga berfungsi sebagai alat pendeteksi larva di permukaan air.",
    },
    {
      "id": 4,
      "image": "/images/ESP-32.png",
      "title": "Setelah mendeteksi keberadaan larva, Pompa air DC 5v diaktifkan melalui tombol ON yang ada di website. Pompa ini berfungsi untuk menghisap larva dari dalam genangan air.",
    },
    {
      "id": 5,
      "image": "/images/ESP-32.png",
      "title": "Larva yang dihisap oleh pompa akan masuk ke bagian bawah bola robot.",
    },
    {
      "id": 6,
      "image": "/images/ESP-32.png",
      "title": "Genangan air yang berisi larva akan dibasmi dengan larutan senyawa dari daun kemangi dan daun ciplukan. Larutan ini terbukti efektif dalam membunuh larva Aedes aegypti.",
    },
    {
      "id": 7,
      "image": "/images/ESP-32.png",
      "title": "Ketika bagian bawah bola robot telah penuh dengan larva, sensor air akan mengenali tingkat keberadaan larva dan mengirimkan sinyal sebagai indikasi bahwa robot telah mencapai kapasitas maksimal.",
    },
  ]
  return (
    <>
      <div className="pt-28 md:pt-40 mb-14">
        <div className="mb-14">
          <h2 className="text-white text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">HOW IT WORKS</h2>
          <span className="block w-[158px] h-1 bg-white mx-auto my-2 lg:my-4"></span>
        </div>
        <div className="flex justify-center items-center pb-[85px]">
          <div className="w-[80%] mx-auto bg-white rounded-[20px] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16">

            {/* Loop data */}
            {data.map((item) => (
              <div className="grid grid-cols-9 gap-5 mb-11" key={item.id}>
                <div className="flex justify-center items-center col-span-1">
                  <h1
                    className="text-2xl md:text-3xl lg:text-6xl text-[#77C4FD] italic"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.id}
                  </h1>
                </div>
                <div className="flex justify-center items-center col-span-3 lg:col-span-2">
                  <Image
                    src={item.image}
                    width={206}
                    height={199}
                    alt="ESP-32"
                  />
                </div>
                <div className="flex justify-center items-center col-span-5 lg:col-span-6">
                  <p className="text-justify text-xs sm:text-base md:text-xl lg:text-3xl">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
