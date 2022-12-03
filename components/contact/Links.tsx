import styles from "../../styles/Component.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Links() {
    return (
        <>
        <div className={styles.linksGrid}>
          <a
            className="text-red-800 mt-2 text-3xl"
            href="https://www.facebook.com/peto.dinis/"
          >
            <div className="w-18">
              <FacebookIcon />
            </div>
            <h3 className="mt-2">Facebook</h3>
          </a>
          <a
            href="https://www.instagram.com/peterdinis1/"
            className="text-red-800 mt-2 text-3xl"
          >
            <div className="w-18">
              <InstagramIcon />
            </div>
            <h3 className="mt-2">Instagram</h3>
          </a>
          <a
            href="https://github.com/peterdinis"
            className="text-red-800 mt-2 text-3xl"
          >
            <div className="w-18">
              <GitHubIcon />
            </div>
            <h3 className="mt-2">Github</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/peter-dinis-58520b214/"
            className="text-red-800 mt-2 text-3xl"
          >
            <div className="w-18">
              <LinkedInIcon />
            </div>
            <h3 className="mt-2">LinkedIn</h3>
          </a>
        </div>
      </>
    )
}