import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import jwt_decode from "jwt-decode";
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";
import axios from "axios";
import burceMars from "assets/images/bruce-mars.jpg";

// Burada doğru yolu kontrol edin
const images = require.context("assets/images", true);
function Header() {
  const handleUpload = async () => {
    const selectedFile = await promptForFile();
    if (!selectedFile) return;

    if (selectedFile.size > 1024 * 1024) {
      alert("Dosya boyutu 1MB'tan büyük olamaz.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile); // dosyayı seçiyoruz

      const storedToken = localStorage.getItem("Authorization");
      const decodedToken = jwt_decode(storedToken);

      formData.append("userId", decodedToken.id);

      const response = await axios.post(
        "http://localhost:9095/api/v1/user/transfer-photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", //Multi part data olarak database deki metota gönderiyorum
          },
        }
      );

      console.log("Dosya yükleme başarılı:", response.data);
      alert("Fotoğraf başarıyla değiştirildi. ID: " + decodedToken.id);
      window.location.reload(); //sayfa yenileniyor
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
      alert("Fotoğraf değiştirme sırasında bir hata oluştu.");
    }
  };

  const promptForFile = () => {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (event) => {
        resolve(event.target.files[0]);
      };
      input.click();
    });
  };
  const handleImageError = () => {
    // Burce Mars fotoğrafını yükleme hatası durumunda kullan
    setProfileImage(burceMars);
  };
  const storedToken = localStorage.getItem("Authorization");
  const decodedToken = jwt_decode(storedToken);
  const [profileImage, setProfileImage] = useState(
    "http://localhost:9095/api/v1/user/images/" + decodedToken.id
  );

  return (
    <ArgonBox position="relative">
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid item display="flex" justifyContent alignContent="space-between" alignItems="center">
          <ArgonBox>
            <ArgonAvatar
              src={profileImage} //getImage metotundan dönen image profil fotosu olarak yazdırılıyor
              alt="profile-image"
              size="xxl"
              shadow="sm"
              onError={handleImageError}
            />
          </ArgonBox>
          <ArgonBox sx={{ ml: "83%" }}>
            <ArgonButton color="warning" size="small" onClick={handleUpload} >
              Change Photo
            </ArgonButton>
          </ArgonBox>
        </Grid>
      </Card>
    </ArgonBox>
  );
}

export default Header;
