import s from './profileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import facebook_logo from "../../../assets/icons/facebook.png";
import vk_logo from "../../../assets/icons/vk.png";
import twitter_logo from "../../../assets/icons/twitter.png";
import instagram_logo from "../../../assets/icons/instagram.png";
import youtube_logo from "../../../assets/icons/youtube.png";
import github_logo from "../../../assets/icons/github.png";
import website_logo from "../../../assets/icons/website.png";
import defaultUserPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
	if (!props.profile){
		return <Preloader />
	}
	return (
		<div className={s.description_block}>
			<div className={s.photo_and_description_block}>
				<div className={s.photo}>
					<img src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto} alt={'avatar'}/>
				</div>
				<div className={s.description}>
					<div className={s.full_name}>{props.profile.fullName}</div>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					<div>{props.profile.aboutMe}</div>
					<div className={s.separator}></div>
					{props.profile.lookingForAJob
						? <div className={s.looking_for_a_job_status_true}>looking for a job</div>
						: <div className={s.looking_for_a_job_status_false}>not looking for work</div>}
					<div className={s.looking_for_a_job_description}>{props.profile.lookingForAJobDescription}</div>
				</div>
			</div>
			<div className={s.contacts_flex_block}>
				<div className={s.contacts_block}>
					{props.profile.contacts.facebook
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.facebook}`}><img src={facebook_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.vk
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.vk}`}><img src={vk_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.twitter
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.twitter}`}><img src={twitter_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.instagram
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.instagram}`}><img src={instagram_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.youtube
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.youtube}`}><img src={youtube_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.github
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.github}`}><img src={github_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
					{props.profile.contacts.website
						? <div className={s.contact}>
							<a href={`${props.profile.contacts.website}`}><img src={website_logo} alt={'facebook_logo'}/></a>
						</div>
						: null
					}
				</div>
			</div>
		</div>
	);
}
export default ProfileInfo;