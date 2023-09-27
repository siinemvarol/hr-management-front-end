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
 const images = require.context('assets/images', true);
function Header() {
  const handleUpload = async () => {
    const selectedFile = await promptForFile();
    if (!selectedFile) return;

    if (selectedFile.size > 1024 * 1024) {
      alert('Dosya boyutu 1MB\'tan büyük olamaz.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);  // dosyayı seçiyoruz

      const storedToken = localStorage.getItem("Authorization");
      const decodedToken = jwt_decode(storedToken);

      formData.append('userId', decodedToken.id);

      const response = await axios.post('http://localhost:9095/api/v1/user/transfer-photo', formData, { 
        headers: {
          'Content-Type': 'multipart/form-data'   //Multi part data olarak database deki metota gönderiyorum
        }
      });

      console.log('Dosya yükleme başarılı:', response.data);
      alert('Fotoğraf başarıyla değiştirildi. ID: ' + decodedToken.id);
      window.location.reload();                 //sayfa yenileniyor
    } catch (error) {
      console.error('Dosya yükleme hatası:', error);
      alert('Fotoğraf değiştirme sırasında bir hata oluştu.');
    }
  }

  const promptForFile = () => {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
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
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ArgonAvatar
              src={profileImage}  //getImage metotundan dönen image profil fotosu olarak yazdırılıyor
              alt="profile-image"
              size="xxl"
              shadow="sm"
              onError={handleImageError}
            />
            
            {/* <ArgonButton
              color="info"
              variant="gradient"
              size="small"
              onClick={handleUpload}
            >
              Fotoğrafı Değiştir
            </ArgonButton> */}
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
          </Grid>
        </Grid>
      </Card>
    </ArgonBox>
  );
}

export default Header;
