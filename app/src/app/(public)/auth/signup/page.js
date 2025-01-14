import React from 'react';
import InputBlock from '@/components/Input/InputBlock';
import SubmitButton from '@/components/Input/SubmitButton';
import Logo from '@/components//Logo';

const SignUpPage = () => {
  return (
    <div className="border rounded shadow-md bg-base-100 dark:border-neutral-focus">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="p-10 text-center">
            <Logo />
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full border-t xl:w-1/2 xl:border-l">
          <div className="p-8">
            <h2 className="mb-4 text-2xl font-bold text-center">
              Sign Up to Uplift
            </h2>
            <form>
              {/* Input Fields */}
              <InputBlock label="Name" type="text" placeholder="Enter your name" />
              <InputBlock label="Email" type="email" placeholder="Enter your email" />
              <InputBlock
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <InputBlock
                label="Re-type Password"
                type="password"
                placeholder="Re-enter your password"
              />

              {/* Submit Button */}
              <SubmitButton label="Create Account" />

              {/* Social Sign Up */}
              <div className="mt-5">
                <button className="w-full btn btn-outline">
                  Sign up with Google
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p>
                  Already have an account?{' '}
                  <a href="/auth/signin" className="link link-primary">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
