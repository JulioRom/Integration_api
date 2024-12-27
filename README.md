# Integration api "Consolidador"

Este proyecto es un servicio API desarrollado para integrar y consolidar datos desde un servidor OPC. El sistema utiliza configuraciones dinámicas y sigue una arquitectura modular que incluye controladores, rutas y servicios especializados.

---

## 🚀 Características

- **Integración OPC:** Conexión con servidores OPC mediante configuraciones específicas.
- **Modularidad:** Código organizado en controladores, servicios, utilidades y rutas.
- **Configurabilidad:** Uso de variables de entorno para adaptarse a diferentes entornos de ejecución.

---

## 📋 Requisitos

- **Node.js** v14 o superior.
- **npm** v6 o superior.
- Acceso a un servidor OPC válido.

---

## 🛠️ Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd Integration_api-master
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

---

## ⚙️ Configuración

Configura las siguientes variables de entorno en un archivo `.env.development` o `.env.production`:

- `PORT`: Puerto en el que el servicio estará disponible.
- `URI_OPC`: URI del servidor OPC al que se conectará la aplicación.

Ejemplo de archivo `.env`:

```env
PORT=4000
URI_OPC=opc.tcp://10.115.43.26:4840
```

---

## ▶️ Uso

1. Inicia el servicio:
   ```bash
   npm start
   ```

2. Accede a la API utilizando el puerto y las rutas configuradas.

---

## 📂 Estructura del Proyecto

```
├── src
│   ├── app.js
│   ├── controllers
│   ├── db
│   ├── routes
│   ├── service
│       ├── ConnectionOPC
│       ├── searcher.service.js
│   ├── utils
├── .env.production
├── package.json
├── README.md
```

---

## ✨ Contribuciones

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza un pull request con una descripción detallada de los cambios.

---

## 📝 Licencia

Este proyecto se distribuye bajo la Licencia MIT.

