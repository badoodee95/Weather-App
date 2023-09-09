import 'bulma/css/bulma.min.css';
import React from 'react';
import styles from '../page.module.css';

export default function SearchCard() {

    return (
        <form className="box">
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alex@example.com" />
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="********" />
                </div>
            </div>

            <button className="button is-primary">Sign in</button>
        </form>
    );
}