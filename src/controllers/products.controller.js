export const getAllProducts = (req, res) => {
  const products = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "iPhone 12",
          description:
            "Teléfono inteligente de Apple con pantalla OLED, chip A14 Bionic y cámara dual de 12 MP.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/263242-800-auto?v=638102910062900000&width=800&height=auto&aspect=true",
          ], // URL de la imagen
        },
        unit_amount: 79900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Samsung Galaxy Watch",
          description:
            "Reloj inteligente de Samsung con seguimiento de actividad, monitorización del sueño y notificaciones de smartphone.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/226811-800-auto?v=637969556234170000&width=800&height=auto&aspect=true",
          ], // URL de la imagen
        },
        unit_amount: 24999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Sony PlayStation 5",
          description:
            "Consola de videojuegos de última generación de Sony con capacidad para jugar en 4K y soporte para tecnología de trazado de rayos.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/242580-800-auto?v=638019793696970000&width=800&height=auto&aspect=true",
          ], // URL de la imagen
        },
        unit_amount: 49999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Samsung QLED TV",
          description:
            "Televisor de alta definición de Samsung con pantalla QLED, resolución 4K y tecnología de alto rango dinámico (HDR).",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/281155-800-auto?v=638163242126370000&width=800&height=auto&aspect=true",
          ],
        },
        unit_amount: 189999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Apple MacBook Pro",
          description:
            "Portátil potente de Apple con pantalla Retina, procesador Intel Core i7 y almacenamiento SSD.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/231183-800-auto?v=637982780655630000&width=800&height=auto&aspect=true",
          ],
        },
        unit_amount: 199999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Canon EOS R5",
          description:
            "Cámara mirrorless de Canon con sensor de alta resolución, capacidad de grabación de video 8K y estabilización de imagen.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/246561-800-auto?v=638035326391670000&width=800&height=auto&aspect=true",
          ],
        },
        unit_amount: 389900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Bose QuietComfort 35 II",
          description:
            "Auriculares inalámbricos con cancelación de ruido de Bose, con soporte para asistentes de voz y conectividad Bluetooth.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/203923-800-auto?v=637909036062230000&width=800&height=auto&aspect=true",
          ],
        },
        unit_amount: 29900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "DJI Mavic Air 2",
          description:
            "Dron compacto y potente de DJI con cámara de 48 MP, resolución 4K y autonomía de vuelo extendida.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/286696-500-auto?v=1772565734&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 79900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Logitech MX Master 3",
          description:
            "Ratón inalámbrico de alta gama de Logitech con sensor láser de precisión y compatibilidad multi-dispositivo.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/226757-500-auto?v=1771876838&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 9999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Samsung SSD 1TB",
          description:
            "Unidad de estado sólido de Samsung con capacidad de almacenamiento de 1TB y alta velocidad de transferencia de datos.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/252637-500-auto?v=1773598590&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 14999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Amazon Echo Dot",
          description:
            "Altavoz inteligente con asistente de voz Alexa integrado para controlar dispositivos domésticos y reproducir música.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/169218-500-auto?v=1773635600&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 3999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "LG UltraGear Monitor",
          description:
            "Monitor gaming de LG con pantalla ultrapanorámica, alta frecuencia de actualización y soporte para AMD FreeSync.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/289456-500-auto?v=1773604239&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 69999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Nintendo Switch",
          description:
            "Consola híbrida de Nintendo que se puede usar tanto en el televisor como en modo portátil para jugar videojuegos.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/180812-500-auto?v=1773641002&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 29999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Microsoft Surface Pro",
          description:
            "Tableta convertible de Microsoft con pantalla táctil, procesador Intel Core i5 y sistema operativo Windows 10.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/238565-500-auto?v=1773525982&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 99999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "GoPro Hero 9 Black",
          description:
            "Cámara de acción de GoPro con capacidad de grabación en 5K, estabilización de imagen y resistencia al agua.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/224642-500-auto?v=1773081733&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 44900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Razer Huntsman Elite",
          description:
            "Teclado mecánico para juegos de Razer con iluminación RGB personalizable y tecnología de respuesta rápida.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/284092-500-auto?v=1773361882&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 19999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Sony WH-1000XM4",
          description:
            "Auriculares inalámbricos con cancelación de ruido de Sony, con calidad de sonido premium y larga duración de la batería.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/184148-500-auto?v=1772641249&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 34999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "AMD Ryzen 9 5900X",
          description:
            "Procesador de alto rendimiento de AMD con 12 núcleos, 24 hilos y frecuencia de reloj máxima de 4.8 GHz.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/239221-500-auto?v=1773525760&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 54900,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "TP-Link Archer AX6000",
          description:
            "Router Wi-Fi 6 de TP-Link con velocidades de hasta 6 Gbps y cobertura de red amplia para múltiples dispositivos.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/197395-500-auto?v=1773592702&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 29999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Acer Predator Helios 300",
          description:
            "Portátil para juegos de Acer con pantalla de 15.6 pulgadas, procesador Intel Core i7 y tarjeta gráfica NVIDIA GeForce RTX.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/181340-500-auto?v=1773158605&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 129999,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Canon PIXMA Pro-100",
          description:
            "Impresora fotográfica profesional de Canon con tecnología de tintas pigmentadas y capacidad de imprimir hasta tamaño A3+.",
          images: [
            "https://doto.vtexassets.com/arquivos/ids/276919-500-auto?v=1773594180&width=500&height=auto&aspect=true",
          ],
        },
        unit_amount: 39900,
      },
      quantity: 1,
    },
  ];

  return res.json({
    items: products.length,
    products,
  });
};
