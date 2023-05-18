import Image from 'next/image'

import styles from '../styles/components/SignupForm.module.css'

import exampleProfilePic from "@/assets/exempleProfilePic.png"
import expandIcon from "@/assets/iconExpand.svg"
import { useState } from 'react'

export function SignupForm(){
    const [isExpanded, setExpanded] = useState(false)

    let choices = [{profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic},
        {profilePic:exampleProfilePic}, {profilePic:exampleProfilePic}]

    const handle_expand = () => {
        setExpanded(!isExpanded)
    }

    return (
        <div className={styles.main}>
        <form noValidate action="" className={styles.signupForm}>
            <label className={styles.formComponent}>
                NAME<br></br>
                <input className={styles.formInput} type="text" name="name" placeholder="Fulano da Silva"/>
            </label>
            <label className={styles.formComponent}>
                EMAIL<br></br>
                <input className={styles.formInput} type="email" name="email" placeholder="fulaneides@example.com"/>
            </label>
            <label className={styles.formComponent}>
                PASSWORD<br></br>
                <input className={styles.formInput} type="password" name="password" placeholder="**************"/>
            </label>
            <label className={styles.formComponent}>
                CONFIRM YOUR PASSWORD<br></br>
                <input className={styles.formInput} type="password" name="passwordConfirm" placeholder="**************" />
            </label>
            <input type="submit" id={styles.submitBtn} value="CREATE ACCOUNT"/>
        </form>
        <div className={styles.profileContainer}>
            PROFILE PICTURE<br></br>
            <div className={styles.profileChoice}>
                {choices.map((choice, index) => index < (isExpanded ? choices.length : 9) && (
                    <div className={styles.profilePicContainer}>
                        <button className={styles.profileButton} key={index}>
                            <Image src={choice.profilePic} className={styles.profilePic}/>
                        </button>
                    </div>
                ))}
                <div className={styles.profilePicContainer}>
                    <button className={styles.profileButton} id={styles.expand} onClick={handle_expand}>
                        <Image src={expandIcon} className={styles.expandIcon} style={isExpanded ? {rotate: '180deg'}: {}}/>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}