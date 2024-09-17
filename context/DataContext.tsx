"use client";
import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';
import { baseUrl } from '@/lib/api';

type AccountData = {
    total_clicks: number;
    successful_clicks: number;
    blocked_clicks: number;
    account_count: number;
    account: {
        id: number;
        user_id: number;
        google_id: string;
        token: string | null;
        name: string;
        email: string;
        avatar: string | null;
        permissions: string | null;
        is_verified: number;
        created_at: string;
        updated_at: string;
        click: number;
        successful_clicks: number;
        blocked_clicks: number;
        block_ip: number;
    }[];
};

// campaign data types
type Account = {
    id: number;
    user_id: number;
    google_id: string;
    token: string | null;
    name: string | null;
    email: string | null;
    avatar: string | null;
    permissions: string | null;
    is_verified: number;
    created_at: string;
    updated_at: string;
};

type Campaign = {
    id: number;
    user_id: number;
    account_id: number;
    uuid: string | null;
    name: string | null;
    bidding_type: string | null;
    bidding_value: number | null;
    budget_name: string | null;
    status: string | null;
    created_at: string;
    updated_at: string;
    successful_clicks: number;
    blocked_clicks: number;
    click: number;
    block_ip: number;
    account: Account;
};

type CampaignData = {
    total_clicks: number;
    successful_clicks: number;
    blocked_clicks: number;
    count_campaign: number;
    campaign: Campaign[];
};

// click data types
type IpAddress = {
    id: number;
    ip: string;
    isProxy: number;
    is_vpn: number;
    isSpam: number;
    isSuspicious: number;
    isTorNode: number;
    country_code: string;
    region_code: string;
    created_at: string;
    updated_at: string;
};

type clickCampaign = {
    id: number;
    user_id: number;
    account_id: number;
    uuid: string | null;
    name: string | null;
    bidding_type: string | null;
    bidding_value: number | null;
    budget_name: string | null;
    status: string | null;
    created_at: string;
    updated_at: string;
};

type Click = {
    id: number;
    click_id: string;
    user_id: number;
    account_id: number;
    campaign_id: number;
    ad_group_id: number;
    creative_id: number;
    target_id: number;
    deviceModel: string;
    deviceType: string;
    operatingSystem: string;
    keyword: string;
    network: string;
    match_type: string;
    placement: string;
    lp_url: string;
    ip_address: IpAddress;
    status: number;
    created_at: string;
    updated_at: string;
    is_blocked: boolean;
    account: Account;
    campaign: clickCampaign;
};

type ClicksData = {
    total_clicks: number;
    successful_clicks: number;
    blocked_clicks: number;
    click: Click[];
};

// blocked IP types

type BlockedIp = {
    id: number;
    ip_id: number;
    user_id: number;
    account_id: number;
    campaign_id: number;
    is_user: number;
    is_blocked: boolean;
    unblock_at: string;
    count_block: string;
    is_deleted: number;
    created_at: string;
    updated_at: string;
    ip_address: IpAddress;
    account: Account;
    campaign: clickCampaign;
};

type BlockIpData = {
    block_ip: BlockedIp[];
};

// allowed ip data types

type AllowedIp = {
    id: number;
    ip_id: number;
    user_id: number;
    account_id: number | null;
    campaign_id: number | null;
    is_user: number;
    is_blocked: boolean;
    unblock_at: string;
    count_block: string;
    is_deleted: number;
    created_at: string;
    updated_at: string;
    ip_address: IpAddress;
};

type AllowedIpData = {
    list: AllowedIp[];
};

// ban sittings types 

type BanSettings = {
    id: number;
    user_id: number;
    name: string | null;
    google_id: string;
    ban_settings: {
        user_id: number;
        account_id: number;
        isProxy: number;
        is_vpn: number;
        isSpam: number;
        isSuspicious: number;
        isTorNode: number | null;
    };
    threshold: {
        user_id: number;
        account_id: number;
        time_id: number;
        allow_up_to: number;
        clicks_within: number;
        unblock_days: number;
        created_at: string;
        time_setting: string | null;
    } | null;
};

type SettingsData = {
    banSettings: BanSettings[];
};

// notes Data 

type SingleNoteData = {
    id: number;
    content: string;
    user_id: number;
    is_important: string;
    created_at: string;
    updated_at: string;
}

type DataContextType = {
    accountData: AccountData | null;
    loading: boolean;
    error: string | null;
    fetchAccountData: () => Promise<void>;
    addNewAccount: (google_id: string, email: string, name: string) => Promise<void>;
    fetchCampaignData: () => Promise<void>;
    campaignData: CampaignData | null;
    fetchClicksData: () => Promise<void>;
    clicksData: ClicksData | null;
    blockedIpData: BlockIpData | null;
    fetchBlockedIpData: () => Promise<void>;
    allowedIpData: AllowedIpData | null;
    fetchAllowedIpData: () => Promise<void>;
    DeleteIp: (ip: string) => Promise<void>;
    addNewIp: (ip: string) => Promise<void>;
    fetchSettingsData: () => Promise<void>;
    settingsData: SettingsData | null;
    setNewSettings: (accountId: string, is_vpn: boolean, isProxy: boolean, isSpam: boolean, isSuspicious: boolean, isTorNode: boolean) => Promise<boolean>;
    fetchNotesData: () => Promise<void>;
    notesData: SingleNoteData[] | null;
    addNewNote: (content: string, is_important: string) => Promise<void>;
    deleteNote: (id: number) => Promise<void>;
    editNote: (id: number, content: string, is_important: string) => Promise<void>;
};


const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { token } = useAuth(); // Get the token from the auth context
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [loading, setLoading] = useState(false); // Set loading to false initially
    const [error, setError] = useState<string | null>(null);
    const [campaignData, setCampaignData] = useState<CampaignData | null>(null);
    const [clicksData, setClicksData] = useState<ClicksData | null>(null);
    const [blockedIpData, setBlockedIpData] = useState<BlockIpData | null>(null);
    const [allowedIpData, setAllowedIpData] = useState<AllowedIpData | null>(null);
    const [settingsData, setSettingsData] = useState<SettingsData | null>(null);
    const [notesData, setNotesData] = useState<SingleNoteData[] | null>(null);

    const fetchAccountData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/google-account`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAccountData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const fetchCampaignData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/campaigns`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCampaignData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const fetchClicksData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/clicks`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setClicksData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const fetchBlockedIpData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/ip/block`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBlockedIpData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const fetchAllowedIpData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/ip/list`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllowedIpData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const DeleteIp = async (ip: string) => {

        try {
            if (!token) throw new Error('No token available');
            const formData = new FormData();
            formData.append('ip', ip);
            const response = await fetch(`${baseUrl}/users/ip/isDeleted`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            if (!response.ok) {
                toast.error("حدث خطأ في حذف العنوان");
                console.error('Failed to delete ip');
            }
            toast.success("تم حذف العنوان بنجاح");
            await fetchAllowedIpData();
        } catch (error) {
            console.error('Error deleting ip:', error);
            setError(error instanceof Error ? error.message : 'Failed to delete ip');
        }
    };

    const addNewIp = async (ip: string) => {

        try {
            if (!token) throw new Error('No token available');
            const formData = new FormData();
            formData.append('ip', ip);
            const response = await fetch(`${baseUrl}/users/ip/list`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            if (!response.ok) {
                toast.error("حدث خطأ في اضافه العنوان");
                throw new Error('Failed to Add ip');
            }
            toast.success("تم اضافه العنوان بنجاح");
            await fetchAllowedIpData();
        } catch (error) {
            console.error('Error adding ip:', error);
            setError(error instanceof Error ? error.message : 'Failed to ADD ip');
        }
    };

    const fetchSettingsData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/settings/get`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Cache-Control': 'no-cache',
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setSettingsData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching settings data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const setNewSettings = async (
        accountId: string,
        is_vpn: boolean,
        isProxy: boolean,
        isSpam: boolean,
        isSuspicious: boolean,
        isTorNode: boolean
    ): Promise<boolean> => {
        try {
            if (!token) throw new Error('No token available');

            const formData = new FormData();
            formData.append('account_id', accountId);
            formData.append('is_vpn', is_vpn ? '1' : '0');
            formData.append('isProxy', isProxy ? '1' : '0');
            formData.append('isSpam', isSpam ? '1' : '0');
            formData.append('isSuspicious', isSuspicious ? '1' : '0');
            formData.append('isTorNode', isTorNode ? '1' : '0');

            const response = await fetch(`${baseUrl}/users/settings/set`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                toast.success("تم تعديل الاعدادات بنجاح");
                // await fetchAllowedIpData();
                return true; // Success
            }

            toast.error("حدث خطأ في تعديل الاعدادات");
            console.error('Failed to ADD settings');
            return false; // Failure
        } catch (error) {
            console.error('Error adding ip:', error);
            setError(error instanceof Error ? error.message : 'Failed to ADD sittings');
            return false; // Failure
        }
    };

    const addNewAccount = async (google_id: string, email: string, name: string) => {
        try {
            if (!token) throw new Error('No token available');

            const formData = new FormData();
            formData.append('google_id', google_id);
            formData.append('email', email);
            formData.append('name', name);

            const response = await fetch(`${baseUrl}/users/google-account/store`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                toast.error("حدث خطأ في اضافة الحساب");
                throw new Error('Failed to add account');
            }
            toast.success("تم اضافة الحساب بنجاح");
            setSettingsData(null)
            await fetchAccountData();

        } catch (error) {
            toast.error("حدث خطا في الاتصال بالسيرفر ")
            console.error('Error adding account:', error);
            setError(error instanceof Error ? error.message : 'Failed to add account');
        }
    };

    const fetchNotesData = async () => {
        try {
            setLoading(true);
            if (token) {
                const response = await fetch(`${baseUrl}/users/notes`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Cache-Control': 'no-cache',
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setNotesData(data);
            } else {
                throw new Error('No token provided');
            }
        } catch (error) {
            console.error('Error fetching notes data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const addNewNote = async (content: string, is_important: string) => {
        console.log(content, is_important, "note data")
        try {
            if (!token) throw new Error('No token available');

            const formData = new FormData();
            formData.append('content', content);
            formData.append('is_important', is_important);

            const response = await fetch(`${baseUrl}/users/notes`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add note');
            }

            toast.success("تم اضافة الملاحظة بنجاح");
            await fetchNotesData();


        } catch (error) {
            console.error('Error adding note:', error);
            setError(error instanceof Error ? error.message : 'Failed to add note');
        }
    }

    const deleteNote = async (id: number) => {

        try {
            if (!token) throw new Error('No token available');
            const response = await fetch(`${baseUrl}/users/notes/destroy/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete note');
            }

            toast.success("تم حذف الملاحظة بنجاح");
            await fetchNotesData();

        } catch (error) {
            console.error('Error deleting note:', error);
            setError(error instanceof Error ? error.message : 'Failed to delete note');
        }

    }

    const editNote = async (id: number, content: string, is_important: string) => {

        try {
            if (!token) throw new Error('No token available');
            const formData = new FormData();
            formData.append('content', content);
            formData.append('is_important', is_important);

            const response = await fetch(`${baseUrl}/users/notes/update/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to edit note');
            }

            toast.success("تم تعديل الملاحظة بنجاح");
            await fetchNotesData();

        } catch (error) {
            console.error('Error editing note:', error);
            setError(error instanceof Error ? error.message : 'Failed to edit note');
        }
    }

    return (
        <DataContext.Provider value={{ editNote, deleteNote, addNewNote, notesData, fetchNotesData, accountData, DeleteIp, clicksData, addNewIp, fetchClicksData, fetchCampaignData, campaignData, addNewAccount, loading, error, fetchAllowedIpData, allowedIpData, fetchBlockedIpData, blockedIpData, setNewSettings, fetchAccountData, fetchSettingsData, settingsData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
