import { useState } from "react";
import {
    priceCategories,
    stayData,
    wellnessData,
    servicesData,
    stayNotes
} from "@/data/priceData";

export function useAdminPrice() {
    const [stay, setStay] = useState(stayData);
    const [wellness, setWellness] = useState(wellnessData);
    const [services, setServices] = useState(servicesData);
    const [notes, setNotes] = useState(stayNotes);

    const [activeTab, setActiveTab] = useState(priceCategories[0]);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");

    const getActiveData = () => {
        if (activeTab.id === "stay") return { data: stay, setter: setStay };
        if (activeTab.id === "wellness") return { data: wellness, setter: setWellness };
        return { data: services, setter: setServices };
    };

    const { data: currentData, setter: currentSetter } = getActiveData();

    const handleBlockChange = (blockIndex, field, value) => {
        const updated = [...currentData];
        updated[blockIndex][field] = value;
        currentSetter(updated);
    };

    const handleItemChange = (blockIndex, itemIndex, field, value) => {
        const updated = [...currentData];
        updated[blockIndex].items[itemIndex][field] = value;
        currentSetter(updated);
    };

    const addItem = (blockIndex) => {
        const updated = [...currentData];
        const newItem = updated[blockIndex].isSingle
          ? { name: "Новая услуга", desc: "Описание услуги", price: "0" }
          : { name: "Новая позиция", desc: "Описание позиции", wd: "0", we: "0" };

        updated[blockIndex].items.push(newItem);
        currentSetter(updated);
    };

    const removeItem = (blockIndex, itemIndex) => {
        const updated = [...currentData];
        updated[blockIndex].items.splice(itemIndex, 1);
        currentSetter(updated);
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage("");
        try {
            const res = await fetch("/api/admin/price", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    priceCategories,
                    stayData: stay,
                    wellnessData: wellness,
                    servicesData: services,
                    stayNotes: notes
                })
            });
            const result = await res.json();
            if (result.success) {
                setMessage("✅ Изменения успешно сохранены в файл конфигурации!");
                setTimeout(() => setMessage(""), 4000);
            } else {
                setMessage(`❌ Ошибка: ${result.error}`);
            }
        } catch (err) {
            setMessage("❌ Сетевая ошибка при сохранении");
        } finally {
            setIsSaving(false);
        }
    };

    return {
        categories: priceCategories,
        activeTab,
        setActiveTab,
        currentData,
        notes,
        setNotes,
        isSaving,
        message,
        handleBlockChange,
        handleItemChange,
        addItem,
        removeItem,
        handleSave
    };
}