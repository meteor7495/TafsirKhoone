import React from "react";

export const Icon = ({ icon }: { icon: string }) => {
    return <i className={`icon-${icon}`}></i>;
};
